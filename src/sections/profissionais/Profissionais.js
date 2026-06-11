'use client';
import React from 'react';
import styles from '@/sections/profissionais/Profissionais.module.css';
import Button from '@/components/button/Button';
import Fade from 'react-reveal/Fade';

const Profissional = () => {
  return (
    <div className={styles.SecaoWrapper} id="profissionais">
      <div className={styles.Profissional}>
        {/* Foto Principal da Esquerda */}
        <Fade left>
          <div className={styles.ProfissionalImg}>
            <img src="./img/Cleide.jpeg" alt="Cleide" />
          </div>
        </Fade>

        {/* Bloco de Conteúdo da Direita */}
        <Fade right>
          <div className={styles.ProfissionalDescricao}>
            <span>Atendimento especializado</span>
            <h2>Profissionais Especializados</h2>
            <p>
              Na Advirsor Financeiras, a competência é a base de nosso
              compromisso com a excelência. Nossa equipe de profissionais é
              notavelmente competente, trazendo consigo uma riqueza de
              experiência e conhecimento no mundo das finanças. O que diferencia
              nossos especialistas é sua habilidade excepcional em oferecer
              soluções financeiras sob medida para cada cliente.
            </p>
            <p className={styles.ProfissionalP}>
              Eles são verdadeiros mestres em navegar pelo intricado cenário
              financeiro, identifying oportunidades e fornecendo orientação
              precisa.
            </p>

            <Button />

            {/* NOVAS FOTOS: Agora posicionadas abaixo do botão */}
            <div className={styles.GaleriaFotos}>
              <div className={styles.FotoItem}>
                <img src="./img/funcionario2.jpeg" alt="Profissional 2" />
              </div>
              <div className={styles.FotoItem}>
                <img src="./img/funcionario3.jpeg" alt="Profissional 3" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Profissional;
