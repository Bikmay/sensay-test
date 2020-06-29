import React, { Component } from "react";

import {connect} from 'react-redux';

import FormItem from './FormItem';
import Button from './Button';
import PropTypes from 'prop-types';

import styles from '../../../styles/login-page/Form.css'



class Form extends Component {
  constructor(props){
    super(props);
    this.validation=this.validation.bind(this);
    this.errorValidation = this.errorValidation.bind(this);
  }

  validation(){
    console.log('button');
    console.log(this.props.store);
    this.props.onClick(true);

    let login = this.props.store.loginAction.login;
    let password = this.props.store.loginAction.password;    


    require('isomorphic-fetch'); 
    const Sendsay = require('sendsay-api');
    let sendsay = new Sendsay();
    console.log('------------->');
    console.log(this.validationLogin(login));
    console.log(this.validationPassword(password));
    
    
    console.log(!(this.validationLogin(login) && this.validationPassword(password)));
    
    if(!(this.validationLogin(login) && this.validationPassword(password))){
      console.log('OPANKI');
      
      this.props.dispatchValue({type:'loginError', text:'Wrong login or password'});
      this.props.onClick(false);
      return;
    }
    console.log(
     sendsay.login({
      login: login,
      sublogin: '',
      password: this.props.store.loginAction.password 
    }).then(function() {
      console.log(
       sendsay.request({ action: 'pong', list: ['about.id']}).then(function(res) {
        console.log(res);
      }));
    }).catch(this.errorValidation));
    console.log(this.props.store);
    
  }

  validationLogin(login){
    let lecs;
    if(login.includes("@")){    
      lecs = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    }
    else{
      lecs= /^[a-zA-Z0-9]+$/;
    }
    return lecs.test(login)
  }
// [0-9a-zA-Z]{6,}
  validationPassword(password){
    let lecs = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g ;
    return lecs.test(password);
  }

  errorValidation(err){
    console.error(err);
    this.props.dispatchValue({type:'loginError', text:err.id})
    this.props.onClick(false);
  }
    render() {
        return (
             <div>               
               <FormItem className={styles.formItem} label="Логин" />
               <FormItem className={styles.formItem} label="Сублогин" option="Опционально"/>
               <FormItem className={styles.formItem} label="Пароль" password={true} />
               <Button click={this.validation}/>
             </div>
            
        );
    }
}

Form.propTypes = {
  errorMessage:PropTypes.func
};

export default connect(
  state =>({
    store:state
}),
dispatch => ({
  dispatchValue:(value) =>{
      console.log('dispatch');
      console.log(value);
      
      dispatch(value);
             
  }
})
) (Form);