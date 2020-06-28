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
  }

  validation(){
    console.log('button');
    console.log(this.props.store);
    
   // this.props.dispatchValue();    
    this.props.onClick(false);

    require('isomorphic-fetch'); // Apply the polyfill.
    const Sendsay = require('sendsay-api');
    let sendsay = new Sendsay();
    let auth = {
      auth:{
      login: this.props.store.loginAction.login,
      sublogin: '',
      password: this.props.store.loginAction.password 
    }}
    console.log('test5');

    console.log(
     sendsay.login({
      login: this.props.store.loginAction.login,
      sublogin: '',
      password: this.props.store.loginAction.password 
    }).then(function() {
      console.log(
       sendsay.request({ action: 'pong', list: ['about.id']}).then(function(res) {
        console.log(res);
      }));
    }));
    //  console.log(
    //   sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
    //     console.log(res.list['about.id']);
    //   }))
    console.log('вот тут вот');
    
    console.log(this.props.store.loginAction.login);
    

    console.log(auth);
      
    this.props.onClick(false);
    
  }//x_159311289249524
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