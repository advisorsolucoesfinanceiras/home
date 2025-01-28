import React from 'react';
import styles from './Header.module.css'
import Nav from '@/components/nav/Nav';
import Button from '@/components/button/Button';
import NavMobile from '@/components/navMobile/NavMobile';

const Header = () => {
  return (
    <div className={`${styles.Header} container`} id='header'>  
      <div>
        <img className={styles.ImgHeader} src="./img/logo.png" alt="" />
      </div>

      <div className={styles.NavHeader}>
        <Nav />
        <Button />
        <div className={styles.menuHamburguer}>
          <NavMobile />
        </div>
      </div>
    </div>
  )
}

export default Header

