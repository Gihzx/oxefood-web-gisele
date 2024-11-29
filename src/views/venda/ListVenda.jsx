import { Button, Container, Divider, Icon, Modal, Table } from "semantic-ui-react";
function ListVenda (){
    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();
    useEffect(() => {
        carregarLista();
      }, []);
      function carregarLista() {
        axios.get("http://localhost:8080/api/venda").then((response) => {
          setLista(response.data);
        });
      }
      function formatarData(dataParam) {
        if (dataParam === null || dataParam === "" || dataParam === undefined) {
          return "";
        }
    
        let arrayData = dataParam.split("-");
        return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
      }
      function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }
    async function remover() {

        await axios.delete('http://localhost:8080/api/venda/' + idRemover)
        .then((response) => {
      
            console.log('venda removido com sucesso.')
      
            axios.get("http://localhost:8080/api/venda")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            console.log('Erro ao remover um venda.')
        })
        setOpenModal(false)
      }
    return (
        <>
         <div>
      <MenuSistema tela={"produto"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2> Cliente </h2>
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Button
              label="Novo"
              circular
              color="orange"
              icon="clipboard outline"
              floated="right"
              as={Link}
              to="/form-cliente"
            />
            <br />
            <br />
            <br />

            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Cliente</Table.HeaderCell>
                  <Table.HeaderCell>Produto</Table.HeaderCell>
                  <Table.HeaderCell>Data Venda</Table.HeaderCell>
                  <Table.HeaderCell>Status da venda</Table.HeaderCell>
                  <Table.HeaderCell>Valor total</Table.HeaderCell>
                  <Table.HeaderCell>Retirada da loja</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((venda) => (
                  <Table.Row key={venda.id}>
                    <Table.Cell>{venda.cliente}</Table.Cell>
                    <Table.Cell>{venda.produto}</Table.Cell>
                    <Table.Cell>{venda.dataVenda}</Table.Cell>
                    <Table.Cell>{venda.statusVenda}</Table.Cell>
                    <Table.Cell>{venda.retiradaEmLoja}</Table.Cell>

                    <Table.Cell textAlign="center">
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este cliente"
                        icon
                        onClick={e => confirmaRemover(venda.id)}

                      >
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
      <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
             <Table.HeaderCell>Retirada da loja</Table.HeaderCell>
             {lista.map((venda) => (
                  <Table.Row key={venda.id}>
                    <Table.Cell>{venda.observacao}</Table.Cell>
                    <Table.Cell textAlign="center">
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este cliente"
                        icon
                      >
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}

               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>

    </div>
        </>
    )

    
}
export default ListVenda