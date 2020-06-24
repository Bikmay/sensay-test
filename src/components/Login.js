import React, { Component } from "react";

import Card from './login-page/Card';

import styles from '../styles/Login.css';

class Login extends Component {
    render() {
        return (
             <div className={styles.loginPage}>
                 <Card />
             </div>
            
        );
    }
}

export default Login;