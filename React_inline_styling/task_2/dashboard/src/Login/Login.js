import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {

  return (
    <div className={css.apply(styles.AppBody)}>
      <p className={css(styles.pAndLabelLogin)}>Login to access the full dashboard</p>
      <label className={css(styles.pAndLabelLogin)} htmlFor="email">Email:</label>
      <input className={css(styles.LoginInput)} type="email" id="email"></input>
      <label className={css(styles.pAndLabelLogin)} htmlFor="password">Password:</label>
      <input className={css(styles.LoginInput)} type="password" id="password"></input>
      <button className={css(styles.LoginButton)}>OK</button>
    </div>
)}

const styles = StyleSheet.create({
  pAndLabelLogin: {
    marginTop: '8%',
    marginLeft: '8%',
  },
  
  LoginInput: {
    marginLeft: '10px',
    border: '1px solid #ababab',
    borderRadius: '5%',
  },
  
  LoginButton: {
    marginLeft: '10px',
    cursor: 'pointer',
    border: '1px solid #ababab',
    borderRadius: '10%',
    backgroundColor: 'white',
  },
  
  AppBody: {
    borderBottom: '#E0354B solid 3px',
    paddingBottom: '200px',
  },
});

export default Login;
