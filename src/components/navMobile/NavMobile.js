'use client';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import styles from './NavMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.containerMobile}>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
      >
        <ul className={styles.listNav}>
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
      </nav>
    </div>
  );
};

export default MenuMobile;
