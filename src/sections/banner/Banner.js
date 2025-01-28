'use client'
import React from 'react';
import styles from './Banner.module.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerCaixa}>
        <div className={styles.BannerTexto}>
          <Fade left>
            <span>Financeira</span>
            <h1>Advisor Soluções Financeiras</h1>
            <p>
              Oferecemos empréstimos sob medida e orientação confiável sobre o
              FGTS. Nossa equipe de especialistas experientes garante taxas
              competitivas e atendimento de qualidade. Conte conosco para cuidar
              de suas necessidades financeiras com segurança e confiança.
              Juntos, construímos um futuro financeiro sólido.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
