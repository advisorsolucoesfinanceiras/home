'use client';
import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <ul>
        <li className={styles.LiNav}>
          <Link
            to="fgts"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href=""
          >
            Saque
          </Link>
        </li>

        <li>
          <Link
            to="servicos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href=""
          >
            Serviços
          </Link>
        </li>

        <li>
          <Link
            to="profissionais"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href=""
          >
            Profissionais
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
