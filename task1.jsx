import React, {Component} from 'react';
import styles from "../asset/task1.module.css"
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Task1 extends React.Component {
    render(){
        return (
            <body classname={styles.body}>
                <h1 className={styles.header}>Apa Yang Sudah Kamu Lakukan Hari Ini?</h1>
                <form>
            <FormGroup check>
            <Label check>
            <Input type="checkbox" /> 
            <p className={styles.p}>Mandi</p>
             </Label>
              </FormGroup>
        <FormGroup check>
        <Label check>
        <Input type="checkbox" /> 
        <p className={styles.p}>Sholat</p>
        </Label>
      </FormGroup>
      <FormGroup check>
            <Label check>
            <Input type="checkbox" /> 
           <p className={styles.p}> Mengaji</p>
            </Label>
            </FormGroup>  
          </form>

            </body>
        )
    }
}
export default Task1