import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  Dropdown,
  Radio,
} from "semantic-ui-react";

function FormEntregador() {
  const options = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
  ];

  return (
    <>
      <div>
        <div style={{ marginTop: "3%" }}>
          <Container textAlign="justified">
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                Entregador&nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro{" "}
            </h2>

            <Divider />

            <div style={{ marginTop: "4%" }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input required fluid label="Nome" maxLength="100" />

                  <Form.Input required fluid width={10} label="CPF">
                    <InputMask required mask="999.999.999-99" />
                  </Form.Input>
                  <Form.Input fluid width={10} label="RG"></Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input fluid width={10} label="DT Nascimento">
                    <InputMask required mask="999.999.999-99" />
                  </Form.Input>
                  <Form.Input required fluid width={10} label="Fone Celular">
                    <InputMask required mask="999.999.999-99" />
                  </Form.Input>
                  <Form.Input fluid width={10} label="Fone Fixo"></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="QTD Entregas Realizada"
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="Valor Por Frente"
                  ></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input fluid width={10} label="Rua"></Form.Input>
                  <Form.Input fluid width={6} label="Número"></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input fluid width={10} label="Bairro"></Form.Input>
                  <Form.Input fluid width={6} label="Cidade"></Form.Input>
                  <Form.Input fluid width={6} label="CEP"></Form.Input>
                </Form.Group>
                <label>UF</label>
                <Dropdown
                  placeholder="Select"
                  fluid
                  multiple
                  selection
                  label="UF"
                  options={options}
                />
                <Form.Group>
                  <Form.Input fluid width={10} label="Complemento"></Form.Input>
                </Form.Group>
                <Form.Group>
                  <h4 style={{ marginRight: "10px" }}>Ativo : </h4>
                  <Radio label="Sim" style={{ marginRight: "10px" }} />
                  <Radio label="Não" />
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
export default FormEntregador;
