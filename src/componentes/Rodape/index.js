import React from "react";
import "./style.css";

const Rodape = () => (
  <footer>
    <div className="rodape1 limitar-secao">
      <figure>
        <img src="assets/logo.png"></img>
      </figure>
      <div>
        <h3>ENDEREÇO</h3>
        <p>Av. Bernardino de Campos, 98</p>
        <p>São Paulo, SP 12345-678</p>
      </div>
      <div>
        <h3>CONTATO</h3>
        <p>Info@meusite.com</p>
        <p>Tel: (11) 3456-7890</p>
      </div>
      <div>
        <h3>HORÁRIOS</h3>
        <p>ABERTO TODOS OS DIAS</p>
        <p>10:00 - 22:00</p>
      </div>
    </div>
    <div className="rodape2">
      <p>
        Sorveteria. Orgulhosamente desenvolvido por <span>Andy Elves</span>
      </p>
    </div>
  </footer>
);

export default Rodape;
