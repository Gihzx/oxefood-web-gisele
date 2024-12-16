import React from "react";
import { Route, Routes } from "react-router-dom";
import FormCliente from "./views/cliente/FormCliente";
import ListCliente from "./views/cliente/ListCliente";
import FormEntregador from "./views/Entregador/FormEntregador";
import Home from "./views/home/Home";
import ListEntregador from "./views/Entregador/ListEntregador";
import ListProduto from "./views/produto/ListProduto";
import FormProduto from "./views/produto/FormProduto";
import FormCategoria from "./views/categoria/FormCategoria";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form-cliente" element={<FormCliente />} />
        <Route path="form-produto" element={<FormProduto />} />
        <Route path="form-entregador" element={<FormEntregador />} />
        <Route path="list-cliente" element={<ListCliente />} />
        <Route path="list-entregador" element={<ListEntregador />} />
        <Route path="list-produto" element={<ListProduto />} />
        <Route path="form-categoria" element={<FormCategoria />} />
      </Routes>
    </>
  );
}

export default Rotas;
