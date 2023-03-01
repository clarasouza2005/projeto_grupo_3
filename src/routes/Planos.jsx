import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import RenderAPI from "../axios/config";

import "./Planos.css";
import "./Planos2.css"

import Loading from "../components/Loading";
import NewsLetter from "../components/NewsLetter";
import RedesSociais from "../components/RedesSociais";

const Planos = () => {
   const [isActive, setIsActive] = useState(true);
      const handleClick = (event) => {
        // ativarbackground()
        // 👇️ remove a class animate__animated animate__fadeInDown do elementro .plano-card para evitar problemas com outras regras de css
        setIsActive(current => !current);
      };

    // const [BgWrapperPlanos,setBgWrapperPlanos] = useState(false)
    //   const ativarbackground = (event)=> {
    //     console.log(BgWrapperPlanos)
    //     setBgWrapperPlanos(current => !current)
    //     console.log(BgWrapperPlanos)
    //   }
  const [Planos, setPlanos] = useState([]);

     
  const getPlanos = async () => {
    try {
      const response = await RenderAPI.get("/Planos");
      const data = response.data;
      setPlanos(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getPlanos();
  }, []);

  return (
    <div className="planos">
      <h1>Planos de Assinatura.</h1>
      <h3>"Escolha o Plano Ideal para Alcançar seus Objetivos Fitness"</h3>
      {/* <h5 className="texto-apelativo">
        Se você está procurando por um plano de academia que seja perfeito para
        atingir seus objetivos fitness, nós temos as melhores opções
        disponíveis para você! Nossos planos de assinatura oferecem acesso
        ilimitado a uma ampla variedade de equipamentos, aulas de grupo e
        programas personalizados, todos guiados por instrutores altamente
        capacitados. Além disso, você terá suporte 24 horas por dia, 7 dias por
        semana, para garantir que esteja no caminho certo para alcançar seus
        objetivos. Não importa qual seja seu nível de fitness, tenha certeza de
        que encontrará um plano que atenda às suas necessidades e ajude você a
        alcançar seus objetivos. Assine hoje e junte-se a milhares de outros
        membros satisfeitos que estão transformando suas vidas com a nossa
        ajuda!
      </h5> */}
      <div className='wrapper-planos'>
        {Planos.length === 0 ? (
          <Loading />
        ) : (
          Planos.map((item) => (
            <div
              onAnimationEnd={handleClick}
              className={`plano-card
              ${isActive ? 'animate__animated animate__slideInLeft' : ''}
              `}
              key={item.id}
            >
              <div className={`descr${item.id}`}>
                <h2 className={`descr-title${item.id}`}>{item.descr} </h2>
              </div>
              {/* <div className="img-window">
              <img src={item.imgs} />
            </div> */}
              <div className="service">
                {item.servicos.map((serv, i) => (
                  <div className={`service${item.id}-${i}`} key={i}>
                    {serv}
                  </div>
                ))}
              </div>
              <div className="valor">
                <small className="fake">{`De R$${(
                  item.valor * 2 +
                  0.99
                ).toFixed(2)} Por:`}</small>
                <p className="valorVenda">
                  {item.valor}
                  <span className="mensalidade">/{item.modalidade}</span>
                </p>

                <small className="pegadinhaDoMalandro">
                  *Pagamento anual + Taxa R$ 6969,42
                </small>
              </div>

              <div>
                <div className="container-ct-logo-redes-sociais">
                  <Link to={`/Planos/${item.id}`} className="btn-planos">
                    Selecionar
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <NewsLetter />
      <RedesSociais />
    </div>
  );
};

export default Planos;