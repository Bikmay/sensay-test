import React, { Component } from "react";

import FormItem from './FormItem';
import Button from './Button';

import styles from '../../../styles/login-page/Form.css'

class Form extends Component {
    render() {
        return (
             <div>               
               <FormItem className={styles.formItem} label="Логин" />
               <FormItem className={styles.formItem} label="Сублогин" option="Опционально"/>
               <FormItem className={styles.formItem} label="Пароль" password={true} />

               <Button />
             </div>
            
        );
    }
}

export default Form;