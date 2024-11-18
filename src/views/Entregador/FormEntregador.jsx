import axios from "axios";
import { default as React, useState } from "react";
import InputMask from "react-input-mask";

import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  Radio
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

function FormEntregador() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [foneFixo, setFoneFixo] = useState("");
  const [qtEntregasRealizadas, setQtEntregasRealizadas] = useState();
  const [valorFrete, setValorFrete] = useState();
  const [enderecoRua, setEnderecoRua] = useState("");
  const [enderecoNumero, setEnderecoNumero] = useState("");
  const [enderecoBairro, setEnderecoBairro] = useState("");
  const [enderecoCidade, setEnderecoCidade] = useState("");
  const [enderecoCep, setEnderecoCep] = useState("");
  const [enderecoUf, setEnderecoUf] = useState();
  const [enderecoComplemento, setEnderecoComplemento] = useState("");
  const [ativo, setAtivo] = useState(true); // Valor booleano

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      dataNascimento: dataNascimento,
      cpf: cpf,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      rg: rg,
      qtEntregasRealizadas: qtEntregasRealizadas,
      valorFrete: valorFrete,
      enderecoRua: enderecoRua,
      enderecoComplemento: enderecoComplemento,
      enderecoNumero: enderecoNumero,
      enderecoBairro: enderecoBairro,
      enderecoCidade: enderecoCidade,
      enderecoCep: enderecoCep,
      enderecoUf: enderecoUf,
      ativo: ativo,
    };

console.log(entregadorRequest)

    axios
      .post("http://localhost:8080/api/entregador", entregadorRequest)
      .then((response) => {
        console.log("entregador cadastrado");
      })
      .catch((error) => {
        console.log("erro ao cadastrar o entregador");
      });
  }

  const ufList = [
    { key: "PE", value: "PE", text: "PE" },
    { key: "SP", value: "SP", text: " SP" },
  ];

  return (
    <>
      <MenuSistema tela={"cliente"} />
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
                  <Form.Input
                    required
                    fluid
                    label="Nome"
                    maxLength="100"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />

                  <Form.Input required fluid width={10} label="CPF">
                    <InputMask
                      required
                      mask="999.999.999-99"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="RG"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                  ></Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input fluid width={10} label="DT Nascimento">
                    <InputMask
                      required
                      mask="99/99/9999"
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input required fluid width={10} label="Fone Celular">
                    <InputMask
                      required
                      mask="(99) 9999.9999"
                      value={foneCelular}
                      onChange={(e) => setFoneCelular(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="Fone Fixo"
                      mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="QTD Entregas Realizada"
                    value={qtEntregasRealizadas}
                    onChange={(e) => setQtEntregasRealizadas(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="Valor Por Frente"
                    value={valorFrete}
                    onChange={(e) => setValorFrete(e.target.value)}
                  ></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    fluid
                    width={10}
                    label="Rua"
                    value={enderecoRua}
                    onChange={(e) => setEnderecoRua(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={6}
                    label="Número"
                    value={enderecoNumero}
                    onChange={(e) => setEnderecoNumero(e.target.value)}
                  ></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    fluid
                    width={10}
                    label="Bairro"
                    value={enderecoBairro}
                    onChange={(e) => setEnderecoBairro(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={6}
                    label="Cidade"
                    value={enderecoCidade}
                    onChange={(e) => setEnderecoCidade(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={6}
                    label="CEP"
                    value={enderecoCep}
                    onChange={(e) => setEnderecoCep(e.target.value)}
                  ></Form.Input>
                </Form.Group>
                <Form.Select
                fluid
                label= "UF"
                options={ufList}
                placeholder="Selecione"
                value={enderecoUf}
                onChange={(e,{value})=>{
                  setEnderecoUf(value)
                }}

                >
                </Form.Select>
          
                <Form.Group>
                  <Form.Input
                    fluid
                    width={10}
                    label="Complemento"
                    value={enderecoComplemento}
                    onChange={(e) => setEnderecoComplemento(e.target.value)}
                  ></Form.Input>
                </Form.Group>
                <Form.Group>
                  <h4 style={{ marginRight: "10px" }}>Ativo : </h4>
                  <Radio
                    label="Sim"
                    style={{ marginRight: "10px" }}
                    value="sim"
                    checked={ativo}
                    onChange={e => setAtivo(true)}
                  />
                  <Radio
                    label="Não"
                    value="não"
                     checked={!ativo}
                    onChange={e => setAtivo(false)}
                  />
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
export default FormEntregador;
