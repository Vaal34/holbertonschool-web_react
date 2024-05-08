import React from "react";
import logo from "../assets/holberton-logo.jpg"
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #E0354B',
  },

  h1: {
    color: '#E0354B',
  },

  img: {
    width: '200px',
    height: '200px',
  }
})

export default Header;
