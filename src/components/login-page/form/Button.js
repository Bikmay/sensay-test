import React, { Component } from "react";
import PropTypes from 'prop-types';

import styles from '../../../styles/login-page/Button.css';

class Button extends Component {
    constructor(props){
        super(props);
        this.state={buttonContent: <p className={styles.buttonText}>Войти</p>};
        this.buttonContentLoading = <div className={styles.buttonLoader}></div>;
        this.buttonContentText = <p className={styles.buttonText}>Войти</p>;
        this.onButtonClick=this.onButtonClick.bind(this);
    }

    onButtonClick(){
        this.setState({buttonContent: <div className={styles.buttonLoader}></div>})
        setTimeout(() => {this.setState({buttonContent: <p className={styles.buttonText}>Войти</p>}); }, 2000);
    }

    render() {
        return (
             <div className={styles.button} onClick={this.onButtonClick}>
                 {this.state.buttonContent}
             </div>
            
        );
    }
}
Button.propTypes = {
    isLoading:PropTypes.bool
  };

export default Button;