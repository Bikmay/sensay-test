import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import styles from '../../../styles/login-page/ErrorLoginMessage.css';

class ErrorLoginMessage extends Component {
    constructor(props){
        super(props);
    }

    render() {        
        return (
             <div className={styles.loginErrorMessage} onClick={this.props.click}>
                 <p className={styles.loginErrorMessageText}>Выход не вышел</p>
                 <p className={styles.loginErrorCallbackMessageText}>{this.props.store.errorMessages.errorCallbackLoginServer}</p>
             </div>
            
        );
    }
}
ErrorLoginMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired
  };

export default connect(
    state =>({
        store:state
    })
) (ErrorLoginMessage);