import React, { useState, useEffect } from "react";
import "./Produtos.css";
import RenderAPI from "../../axios/config";
import Loading from "/src/components/Loading.jsx";
import Cart from '/src/assets/icons/Shopping-cart.png'

const Produtos = () => {
  const [Produtos, setProdutos] = useState([]);
  const getProdutos = async () => {
    try {
      const response = await RenderAPI.get("/Suplementos");
      const data = response.data;
      setProdutos(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <div className="container-produtos">
      {Produtos.length === 0 ? (
        <Loading />
      ) : (
        <div className="wrapper-produto">
          {Produtos.map((produto) => (
            <div className="produto-card card-grid" key={produto.id}>
              <img className='produto-img' src={produto.imgs} alt='Suplemento' />
              <h1  className='produto'>{produto.produto}</h1>
              <h1 className='marca'>{produto.marca}</h1>
              <h1 className='quantidade'>{produto.quantidade}</h1>
              <h1 className='valor-produto'>{`R$ ${(produto.valor * 2 + 0.99).toFixed(2)}`}</h1>
              <div className="botoes">
                <button type='button' className="comprar" >Comprar</button>
                <div className="acumulador-de-items">
                  <button type='button' className='acumulador'></button>
                  <button type='button' className='carrinho'>
                    <img id='cart' src={Cart}alt="Adcionar ao carrinho" />
                    </button>
                  <button type='button' className='acumulador'>+</button>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Produtos;
