import axios from "axios";
import { default as React, useState } from "react";
import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Form,
  Icon,
  Radio,
} from "semantic-ui-react";
import MenuSistema from '../../MenuSistema';


function FormEntregador() {

const [nome, setNome] = useState();
const [CPF, setCPF] = useState()
const [rg, setRg] = useState()
const [dataNascimento, setDataNascimento] = useState()
const [foneCelular, setFoneCelular ] = useState()
const [foneFixo, setFoneFixo ] = useState()
const [qtdRealizada, setQtdRealizada] = useState()
const [valorFrete, setValorFrete] =useState()
const [rua, setRua] = useState()
const [numero, setNumero] = useState()
const [bairro, setBairro] = useState()
const [cidade, setCidade] = useState()
const [cep, setCep] = useState()
const [uf, setUf] =useState()
const [complemento, setComplemento] = useState()
const [ativo, setAtivo] = useState()

function salvar(){
  let entregadorRequest ={
    nome:nome,
    CPF:CPF,
    rg:rg,
    dataNascimento:dataNascimento,
    foneCelular:foneCelular,
    foneFixo:foneFixo,
    qtdRealizada:qtdRealizada,
    valorFrete:valorFrete,
    rua:rua,
    numero:numero,
    bairro:bairro,
    cidade:cidade,
    cep:cep,
    uf:uf,
    complemento:complemento,
    ativo:ativo

  }
  axios.post("http://localhost:8080/api/entregador", entregadorRequest)
.then((response) => {
  console.log("entregador cadastrado")
}).catch((error)=>{
  console.log("erro ao cadastrar o entregador")
})
}


  const options = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
  ];

  return (
    <>
    <MenuSistema tela={'cliente'} />
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
                  <Form.Input required fluid label="Nome" maxLength="100"
                  value={nome}
                  onChange={e =>setNome(e.target.value)}
                  />

                  <Form.Input required fluid width={10} label="CPF" 
                  
                  >
                    <InputMask required mask="999.999.999-99" value={CPF}
                  onChange={e =>setCPF(e.target.value)}/>
                  </Form.Input>
                  <Form.Input fluid width={10} label="RG"
                  value={rg}
                  onChange={e =>setRg(e.target.value)}
                  >
                    
                  </Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                  
                  <Form.Input fluid width={10} label="DT Nascimento">
                    <InputMask required mask="99/99/9999" 
                     value={dataNascimento}
                     onChange={e =>setDataNascimento(e.target.value)} />
                  </Form.Input>
                  <Form.Input required fluid width={10} label="Fone Celular">
                    <InputMask required mask="(99) 9999.9999"
                    value={foneCelular}
                    onChange={e=> setFoneCelular(e.target.value)}
                    />
                  </Form.Input>
                  <Form.Input fluid width={10} label="Fone Fixo"
                    value={foneFixo}
                    onChange={e=> setFoneFixo(e.target.value)}></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="QTD Entregas Realizada"
                    value={qtdRealizada}
                    onChange={e=> setQtdRealizada(e.target.value)}
                  ></Form.Input>
                  <Form.Input
                    fluid
                    width={10}
                    label="Valor Por Frente"
                    value={valorFrete}
                    onChange={e=> setValorFrete(e.target.value)}
                  ></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input fluid width={10} label="Rua"
                  value={rua}
                  onChange={e=> setRua(e.target.value)}
                  ></Form.Input>
                  <Form.Input fluid width={6} label="Número"
                  value={numero}
                  onChange={e=> setNumero(e.target.value)}></Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input fluid width={10} label="Bairro"
                  value={bairro}
                  onChange={e=> setBairro(e.target.value)}></Form.Input>
                  <Form.Input fluid width={6} label="Cidade"
                  value={cidade}
                  onChange={e=> setCidade(e.target.value)}></Form.Input>
                  <Form.Input fluid width={6} label="CEP"
                  value={cep}
                  onChange={e=> setCep(e.target.value)}></Form.Input>
                </Form.Group>
                <label>UF</label>
                <Dropdown
                  placeholder="Select"
                  fluid
                  multiple
                  selection
                  label="UF"
                  options={options}
                  value={uf}
                    onChange={e=> setUf(e.target.value)}
                />
                <Form.Group>
                  <Form.Input fluid width={10} label="Complemento"
                  value={complemento}
                  onChange={e=> setComplemento(e.target.value)}></Form.Input>
                </Form.Group>
                <Form.Group>
                  <h4 style={{ marginRight: "10px" }}>Ativo : </h4>
                  <Radio label="Sim" style={{ marginRight: "10px" }} value={ativo} onChange={e =>setAtivo(e.target.value)} />
                  <Radio label="Não" value={ativo} onChange={e =>setAtivo(e.target.value)}  />
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
                  onClick={()=>salvar()}
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
