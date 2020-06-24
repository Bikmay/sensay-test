import React, { Component } from "react";

import Form from './form/Form';

import styles from '../../styles/login-page/Card.css';

class Card extends Component {
    render() {
        return (
             <div className={styles.card}>
               <h1 className={styles.cardHead}>API-консолька</h1>
               <Form />
             </div>
            
        );
    }
}

export default Card;