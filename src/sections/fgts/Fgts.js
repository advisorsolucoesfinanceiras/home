'use client';
import React from 'react';
import styles from '@/sections/fgts/Fgts.module.css';
import Button from '@/components/button/Button';
import Fade from 'react-reveal/Fade';

const Fgts = () => {
  return (
    <div className={styles.Fgts} id="fgts">
      <Fade left>
        <div className={styles.FgtsImg}>
          <img src="./img/2.png" alt="" />
        </div>
      </Fade>

      <Fade right>
        <div className={styles.FgtsDescricao}>
          <span>Credito fácil</span>
          <h2>É Fácil: Saque FGTS, Emprestimos e Saque Aniversario</h2>
          <h3>Como fazer?</h3>
          <p>Temos varios especialistas em saque.</p>
          <ul>
            <li>
              <img src="./icons/check.svg" alt="" />
              Entre em contato pelo whatsapp;
            </li>
            <li>
              <img src="./icons/check.svg" alt="" />
              Converse com um de nossos especialistas;
            </li>
            <li>
              <img src="./icons/check.svg" alt="" />
              Siga as orientaçoes;
            </li>
            <li>
              <img src="./icons/check.svg" alt="" />
              Faça seu saque.
            </li>
          </ul>

          <Button />
        </div>
      </Fade>
    </div>
  );
};

export default Fgts;
