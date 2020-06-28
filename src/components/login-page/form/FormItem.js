import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import styles from '../../../styles/login-page/FormItem.css';

class FormItem extends Component {
    constructor(props){
        super(props);
        if(this.props.password != null){
            this.state={type:'password'};
        }
        else{
            this.state={type:''}
        }
        // this.state={...this.state, label:this.props.label}
        this.onChangeValue=this.onChangeValue.bind(this);
        this.state= {...this.state, label: this.props.label}
    }

    onChangeValue(event){
        let tmp=this.props.label;
        console.log('========');
        console.log(this.props.store);
        
        switch(tmp){
            case 'Логин':
                this.props.dispatchValue({type:'login',login:event.target.value});
                break;
            case 'Пароль':
                this.props.dispatchValue({type:'password',password:event.target.value});
            break;    
        }
    }

    render() {
        return (
             <div className={styles.formItem}>
                 <div className={styles.formItemLabels}>
                 <p className={styles.formItemLabel}>{this.props.label}</p>
                 <p className={styles.formItemOption}>{this.props.option}</p>
                 </div>
               <input className={styles.formItemInput} type={this.state.type} onChange={this.onChangeValue}/>
             </div>
            
        );
    }

    
}
FormItem.propTypes = {
    label: PropTypes.string.isRequired,
    option: PropTypes.string,
    password: PropTypes.bool
  };

export default connect(
    state =>({
        store:state
    }),
    dispatch => ({
        dispatchValue:(value) =>{
            
            dispatch(value);
                
            }
        }
    )
)(FormItem);