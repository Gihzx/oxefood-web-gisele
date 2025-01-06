import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
export default function FormCategoria() {
  const [descricao, setDescricao] = useState();
  const [idCategoria, setIdCategoria] = useState();
  const { state } = useLocation();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/categoria/" + state.id)
        .then((response) => {
          setIdCategoria(response.data.id);
          setDescricao(response.data.descricao);
        });
    }
  }, [state]);
  function salvar() {
    let categoriaRequest = {
      descricao: descricao,
    };

    if (idCategoria != null) {
      //Alteração:
      axios
        .put(
          "http://localhost:8080/api/categoria/" + idCategoria,
          categoriaRequest
        )
        .then((response) => {
          console.log("categoria alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alter um categoria.");
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8080/api/categoria", categoriaRequest)
        .then((response) => {
          console.log("categoria cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir o categoria.");
        });
    }
  }

  return (
    <div>
      <MenuSistema tela={"categoria"} />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idCategoria === undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Categoria &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro
            </h2>
          )}
          {idCategoria != undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Categoria &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Alteração
            </h2>
          )}
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Categoria"
                  maxLength="100"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
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
                <Link>Voltar</Link>
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
  );
}
