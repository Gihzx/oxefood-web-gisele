import { Segment } from "semantic-ui-react";
import "./App.css";
import FormProduto from "./views/produto/FormProduto";
import FormEntregador from "./views/Entregador/FormEntregador";
import FormCliente from "./views/cliente/FormCliente";
function App() {
  return (
    <>
      <FormCliente />
      <FormProduto />
      <FormEntregador />
      <div style={{ marginTop: "6%" }}>
        <Segment vertical color="grey" size="tiny" textAlign="center">
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>
    </>
  );
}

export default App;
