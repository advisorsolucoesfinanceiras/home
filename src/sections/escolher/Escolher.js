'use client';
import React from 'react';
import styles from '@/sections/escolher/Escolher.module.css';
import Fade from 'react-reveal/Fade';

const Escolher = () => {
  return (
    <div className="container" id='escolher'>
      <div className={styles.Escolha}>
        <Fade top>
        <span>A melhor escolha</span>
        <h2>Somos a Escolha Certa</h2>
        <div>
          <ul className={styles.EscolhaLi}>
            <li>
              <img src="./icons/fone.svg" alt="" />{' '}
              <h3>Profissionais Expecializados</h3>{' '}
              <p>
                Nós acreditamos que atender bem é oferecer processos simples e
                seguros, que facilitem o dia a dia do cliente.
              </p>
            </li>
            <li>
              <img src="./icons/money.svg" alt="" /> <h3>Credito Certo</h3>{' '}
              <p>
                Nós cuidamos do que é importante para você e, por isso, sabemos
                que o seu crédito precisa ser do tamanho que você precisa e da
                forma que você pode pagar.
              </p>
            </li>
            <li>
              <img src="./icons/happy.svg" alt="" /> <h3>Do seu Jeito</h3>{' '}
              <p>
                O nosso foco está em fazer negócio do jeito que você precisa,
                porque o seu sonho se torna a nossa realidade e a nossa missão.
              </p>
            </li>
          </ul>
        </div>
        </Fade>
        
      </div>
    </div>
  );
};

export default Escolher;
