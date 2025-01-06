
import axios from "axios";
import { default as React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";


export default function CadastroEnderecoCliente() {
    const [endereco, setEndereco] = useState();
    const [idCliente, setIdCliente] = useState();
    const { state } = useLocation();


    useEffect(() => {
        if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/cliente/EnderecoCliente" + state.id)
            .then((response) => {
              setIdCliente(response.data.id)
              setEndereco(response.data.endereco)
              
            })
        }
      }, [state])
    
    
      function salvar() {
        let clienteRequest = {
          endereco: endereco,
         
        };
        if (idCliente != null) { //Alteração:
            axios.put("http://localhost:8080/api/cliente/EnderecoCliente" + idCliente, clienteRequest)
              .then((response) => { console.log('Cliente alterado com sucesso.') })
              .catch((error) => { console.log('Erro ao alter um cliente.') })
          } else { //Cadastro:
            axios.post("http://localhost:8080/api/cliente/EnderecoCliente", clienteRequest)
              .then((response) => { console.log('Cliente cadastrado com sucesso.') })
              .catch((error) => { console.log('Erro ao incluir o cliente.') })
          }
    }
    
    return (
        <>
            <MenuSistema />
            <div style={{ marginTop: "4%" }}>
                <Form>
                    <Form.Group widths="equal">
                        <Form.Input
                            required
                            fluid
                            label="Endereço"
                            maxLength="100"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
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
        </>
    )
}