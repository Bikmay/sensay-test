import React, { Component } from "react";
import PropTypes from 'prop-types';

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
    }
    render() {
        return (
             <div className={styles.formItem}>
                 <div className={styles.formItemLabels}>
                 <p className={styles.formItemLabel}>{this.props.label}</p>
                 <p className={styles.formItemOption}>{this.props.option}</p>
                 </div>
               <input className={styles.formItemInput} type={this.state.type} />
             </div>
            
        );
    }
}
FormItem.propTypes = {
    label: PropTypes.string.isRequired,
    option: PropTypes.string,
    password: PropTypes.bool
  };

export default FormItem;