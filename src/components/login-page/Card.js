import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Form from './form/Form';
import ErrorLoginMessage from './form/ErrorLoginMessage';

import styles from '../../styles/login-page/Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state={error: <p></p>, errorStyle:{}};
    this.showErrorMessage=this.showErrorMessage.bind(this);
  }

  showErrorMessage(tmp){
    console.log(tmp);
    
    if(tmp){
      this.setState({error:<p></p>, errorStyle:{}});
    }
    else{      
      this.setState({error:<ErrorLoginMessage error={this.props.store.errorMessages.errorCallbackLoginServer} />, errorStyle:{ height: "410px"}})
    }
  }
    render() {
      
        return (
             <div className={styles.card} style={this.state.errorStyle}>
               <h1 className={styles.cardHead}>API-консолька</h1>
               {this.state.error}
               <Form onClick={this.showErrorMessage}/>
             </div>
            
        );
    }
}

Card.propTypes={
  errorMessage: PropTypes.any
}

export default connect(
  state =>({
    store:state
})
) (Card);