'use client';
import React from 'react';
import styles from '@/sections/servicos/Servicos.module.css';
import Fade from 'react-reveal/Fade';

const Servicos = () => {
  return (
    <div className="container" id="servicos">
      <Fade top>
        <div className={styles.Servicos}>
          <span>A melhor escolha</span>
          <h2>Nossos Serviços</h2>
          <div>
            <ul className={styles.ServicosLi}>
              <li>
                <h3>Empréstimo SIAPE</h3>
                <p>
                  Empréstimo para servidores públicos federais civis aposentados
                  ou pensionistas.
                </p>
              </li>
              <li>
                <h3>Emprestimo INSS</h3>
                <p>Empréstimo consignado pra aposentados e pensionistas.</p>
              </li>
              <li>
                <h3>Crédito Pessoal CLT</h3>
                <p>
                  Empréstimo para trabalhadores da rede privada, carteira
                  assinada, (CLT).
                </p>
              </li>
              <li>
                <h3>Refinanciamento FGTS</h3>
                <p>
                  Empréstimo que permite a antecipação do valor de até 5
                  parcelas de Saque Aniversário do FGTS.
                </p>
              </li>
              <li>
                <h3>Portabilidade</h3>
                <p>
                  Transfira sua conta corrente de uma instituição bancária para
                  outra, com a finalidade de buscar taxas e vantagens melhores.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Servicos;
