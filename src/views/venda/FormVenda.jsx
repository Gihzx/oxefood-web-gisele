import { useState } from "react";
import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
function FormVenda (){
    const [cliente, setCliente] = useState("")
    const [produto, setProduto] = useState("")
    const [statusVenda, setStatusVenda] = useState("")
    const [dataVenda, setDataVenda] = useState()
    const [observacao, setObservacao] = useState("")
    const [valorTotal, setValorTotal] = useState()
    const [retiradaEmLoja, setRetiradaEmLoja] = useState(true)
    const { state } = useLocation();
    const [idVenda, setIdVenda] = useState();
    useEffect(() => {

        if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/venda/" + state.id)
            .then((response) => {
              setIdVenda(response.data.id)
              setCliente(response.data.cliente)
              setProduto(response.data.produto)
              setDataVenda(formatarData(response.data.dataVenda))
              setStatusVenda(response.data.statusVenda)
              setObservacao(response.data.observacao)
              setRetiradaEmLoja(response.data.retiradaEmLoja)
              setValorTotal(response.data.valorTotal)
             
            })
        }
      }, [state])
      function salvar() {
        let vendaRequest = {
            cliente: cliente,
            produto: produto,
            dataVenda: dataVenda,
            statusVenda: statusVenda,
            valorTotal:valorTotal,
            observacao: observacao,
            retiradaEmLoja: retiradaEmLoja,
        };
    
        console.log(entregadorRequest);
    
          axios.post("http://localhost:8080/api/venda", vendaRequest)
            .then((response) => { console.log('venda cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o venda.') })
      }

    const statusList = [
        { key: "Pedido Cancelado", value: "Pedido Cancelado", text: "Pedido Cancelado" },
        { key: "Aguardando Pagamento", value: "Aguardando Pagamento", text: " Aguardando Pagamento" },
        { key: "pago", value: "pago", text: " pago" },
        { key: "Entregue", value: "Entregue", text: " Entregue" },
      ];

    return(
        <>
         <MenuSistema tela={"venda"} />
      <div>
        <div style={{ marginTop: "3%" }}>
          <Container textAlign="justified">
          


            <Divider />

            <div style={{ marginTop: "4%" }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    fluid
                    label="Cliente"
                    maxLength="100"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                  />

                  <Form.Input required fluid width={10} label="Produto">
                    <InputMask
                      required
                      value={produto}
                      onChange={(e) => setProduto(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input required fluid width={10} label="Data da venda">
                    <InputMask
                      required
                      mask="00/00/0000"
                      value={dataVenda}
                      onChange={(e) => setDataVenda(e.target.value)}
                    />
                  </Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input required fluid width={10} label="Observação">
                    <InputMask
                      required
                    
                      value={observacao}
                      onChange={(e) => setObservacao(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input required fluid width={10} label="Valor Total">
                    <InputMask
                      required
                    
                      value={valorTotal}
                      onChange={(e) => setValorTotal(e.target.value)}
                    />
                  </Form.Input>
                    <Form.Select
                  fluid
                  label="Selecione"
                  options={statusList}
                  placeholder="Selecione"
                  value={statusVenda}
                  onChange={(e, { value }) => {
                    setStatusVenda(value);
                  }}
                ></Form.Select>
                     <Form.Group>
                  <h4 style={{ marginRight: "10px" }}>Ativo : </h4>
                  <Radio
                    label="Sim"
                    style={{ marginRight: "10px" }}
                    value="sim"
                    checked={retiradaEmLoja}
                    onChange={(e) => setRetiradaEmLoja(true)}
                  />
                  <Radio
                    label="Não"
                    value="não"
                    checked={!retiradaEmLoja}
                    onChange={(e) => setRetiradaEmLoja(false)}
                  />
                </Form.Group>
                 
            
                </Form.Group>
              </Form>

              <div style={{ marginTop: "4%" }}>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  <Icon name="reply" />
                  <Link to={"/list-venda"}>Voltar</Link>
                </Button>

                <Button
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="blue"
                  floated="right"
                  onClick={() => salvar()}
                >
                  <Icon name="save" />
                  Salvar
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
        </>
    )
}
export default FormVenda