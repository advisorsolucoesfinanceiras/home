'use client';
import React from 'react';
import styles from '@/sections/profissionais/Profissionais.module.css';
import Button from '@/components/button/Button';
import Fade from 'react-reveal/Fade';

const Profissional = () => {
  return (
    <div className={styles.Profissional} id="profissionais">
      <Fade left>
        <div className={styles.ProfissionalImg}>
          <img src="./img/Cleide.jpg" alt="" />
        </div>
      </Fade>

      <Fade right>
        <div className={styles.ProfissionalDescricao}>
          <span>Atendimento especializado</span>
          <h2>Profissionais Especializados</h2>
          <p>
            Na Advirsor Financeiras, a competência é a base de nosso compromisso
            com a excelência. Nossa equipe de profissionais é notavelmente
            competente, trazendo consigo uma riqueza de experiência e
            conhecimento no mundo das finanças. O que diferencia nossos
            especialistas é sua habilidade excepcional em oferecer soluções
            financeiras sob medida para cada cliente.
          </p>
          <p className={styles.ProfissionalP}>
            Eles são verdadeiros mestres em navegar pelo intricado cenário
            financeiro, identificando oportunidades e fornecendo orientação
            precisa.
          </p>

          <Button />
        </div>
      </Fade>
    </div>
  );
};

export default Profissional;
