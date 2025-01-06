import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  TextArea,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from '../../views/util/Util';
import { useState } from "react";
import axios from "axios";
function FormProduto() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
  const [codigo, setCodigo] = useState("");

  function salvar() {
    let produtoRequest = {
      codigo: codigo,
      titulo: titulo,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoEntregaMinimo: tempoEntregaMinimo,
      tempoEntregaMaximo: tempoEntregaMaximo,
    };
    console.log(produtoRequest);
    axios
      .post("http://localhost:8080/api/produto ", produtoRequest)
      .then((response) => {
        notifySuccess('Cliente cadastrado com sucesso.')

      })
      .catch((error) => {
        if (error.response.data.errors != undefined) {
          for (let i = 0; i < error.response.data.errors.length; i++) {
            notifyError(error.response.data.errors[i].defaultMessage)
       }
 } else {
   notifyError(error.response.data.message)
 }

      });
  }

  return (
    <>
      <div>
        <MenuSistema tela={"cliente"} />
        <div style={{ marginTop: "3%" }}>
          <Container textAlign="justified">
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                Produto&nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro{" "}
            </h2>

            <Divider />

            <div style={{ marginTop: "4%" }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    fluid
                    label="Titulo"
                    maxLength="100"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />

                  <Form.Input
                    required
                    fluid
                    width={10}
                    label="Código do produto"
                  >
                    <InputMask
                      required
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                    />
                  </Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    label="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  >
                    <TextArea placeholder="Tell us more" />
                  </Form.Input>
                </Form.Group>

                <Form.Group>
                  <Form.Input required fluid width={10} label="Valor Unitário">
                    <InputMask
                      required
                      value={valorUnitario}
                      onChange={(e) => setValorUnitario(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input
                    required
                    fluid
                    width={10}
                    label="Tempo de estrega Mínima em minutos"
                    placeholder="30"
                    value={tempoEntregaMinimo}
                    onChange={(e) => setTempoEntregaMinimo(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    required
                    placeholder="40"
                    fluid
                    width={10}
                    value={tempoEntregaMaximo}
                    onChange={(e) => setTempoEntregaMaximo(e.target.value)}
                    label="Tempo de estrega Máxima em minutos"
                  ></Form.Input>
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
                  Voltar
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
  );
}
export default FormProduto;
