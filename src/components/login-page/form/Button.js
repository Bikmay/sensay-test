import React, { Component } from "react";
import PropTypes from 'prop-types';

import styles from '../../../styles/login-page/Button.css';

class Button extends Component {
    constructor(props){
        super(props);
        this.state={buttonContent: <p className={styles.buttonText}>Войти</p>}
        this.buttonContentLoading = <div className={styles.buttonLoader}></div>;
        this.buttonContentText = <p className={styles.buttonText}>Войти</p>;
    }

    render() {
        return (
             <div className={styles.button} onClick>
                 {this.state.buttonContent}
             </div>
            
        );
    }
}
Button.propTypes = {
    isLoading:PropTypes.bool
  };

export default Button;