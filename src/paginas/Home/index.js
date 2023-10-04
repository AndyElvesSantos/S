import React from "react";
import { Link } from "react-router-dom";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import "./style.css";

const Home = () => (
  <div id="/">
    {/* CABEÇALHO */}
    <Topo />
    {/* CONTEÚDO PRINCIPAL */}
    <main>
      <section className="secao-banner">
        <h1>SORVETE ARTESANAL</h1>
        {/* <img src="assets/banner-home.png"></img> */}
      </section>
      <section className="secao-cards">
        <section className="secao-sabores">
          <figure>
            <img src="assets/banner-sabores.jpg"></img>
          </figure>
          <div className="secao-sabores-texto">
            <h2>NOSSOS SABORES</h2>
            <span>
              <strong>Novos e deliciosos!</strong>
            </span>

            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              sorveteria todos os nosssos produtos são naturais, à base de
              frutas e sem nenhum convervante! Venha conhecer e perceber que tem
              como o sorvete ser delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </section>
        <section className="secao-eventos">
          <div className="secao-eventos-texto">
            <h2>NOSSOS EVENTOS</h2>
            <span>
              <strong>Delícias com sorvete!</strong>
            </span>

            <p>
              Mais que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvetes da sua vida! Venha nos conhecer e passar um
              tempo aqui com a gente!
            </p>
          </div>
          <figure>
            <img src="assets/eventos-image.jpg"></img>
          </figure>
        </section>
        <section className="secao-sobre">
          <figure>
            <img src="assets/sobre-image.jpg"></img>
          </figure>
          <div className="secao-sobre-texto">
            <h2>SOBRE NÓS</h2>
            <span>
              <strong>Alegria em cada casquinha!</strong>
            </span>

            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>
      </section>
    </main>
    <Rodape />
  </div>
);

export default Home;
