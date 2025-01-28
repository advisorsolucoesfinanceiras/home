import React from 'react';
import styles from '@/sections/footer/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterConteudo}>
        <div className={styles.FooterCaixa}>
          <img src="./img/logo.png" alt="" />
          <p>
            Está precisando de dinheiro? Temos a solução para você faça o saque
            FGTS, saque aniversario, emprestimos, entre em contato para saber
            mais.
          </p>
        </div>

        <div className={styles.FooterContato}>
          <h3>Contato:</h3>
          <ul>
            <li>
              <img src="./icons/whats.svg" alt="" />
              WhatsApp: (11)99294-4915 - (11)95908-3031
            </li>
            <li>
              <img src="./icons/email.svg" alt="" />
              Email: financialadvirsor@gmail.com
            </li>
            <li>
              <img src="./icons/local.svg" alt="" />Endereço: Guarulhos, SP, Brasil
            </li>
            <li>
              <img src="./icons/relogio.svg" alt="" />
              Horario: Segunda a sexta das 09:30 ás 17:15
            </li>
          </ul>

          <h4></h4>
          <p></p>
        </div>

        <div className={styles.FooterCaixaIcons}>
          <h3>Redes:</h3>
          <ul className={styles.FooterIcons}>
            <li>
              <a href="https://www.facebook.com/financialadvirsor.solucoesfinanceiras?mibextid=ZbWKwL">
                <img src="./icons/face.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/advirsor_financeira?utm_source=qr&igshid=MTN6MDhmMjE2dWtveQ%3D%3D">
                <img src="./icons/insta.svg" />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511992944915">
                <img src="./icons/whats.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.FooterCopy}>
        <p>
          Copyright© - Desenvolvido por
          <a href="https://ijcode.com.br/"> IJCode</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
