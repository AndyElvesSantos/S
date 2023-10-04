import React from "react";
import { Link } from "react-router-dom";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import "./style.css";

const Sabores = () => (
  <div id="sabores">
    <Topo />
    <main>
      <section className="secao-banner-sabores">
        <h1>NOSSOS SABORES</h1>
      </section>
      <section className="limitar-secao">
        <div className="sabores-texto">
          <h2>SABORES DE SORVETE</h2>
        </div>
        <div className="secao-principal-sabores">
          <div className="cards">
            <img src="assets/sabor-oreo.png"></img>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className="cards">
            <img src="assets/sabor-pistache.png"></img>
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className="cards">
            <img src="assets/sabor-cookies-avela.png"></img>
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className="cards">
            <img src="assets/sorbet-kiwi.png"></img>
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
          </div>
          <div className="cards">
            <img src="assets/sorbet-morango.png"></img>
            <h3>Sorvete Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className="cards">
            <img src="assets/sorbet-limao.png"></img>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Rodape />
  </div>
);

export default Sabores;
