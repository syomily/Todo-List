import React, {Component} from 'react';
import styles from "../asset/task2.module.css"
import { Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Task2 extends React.Component {
    render(){
        return(    
        <div className={styles.body}>
        <div className={styles.parent} contenteditable>
        
        <div className={styles.child} contenteditable>
        <h3 className={styles.h3}>Apa Yang Sudah Kamu Lakukan Hari Ini?</h3>
                <form className={styles.form}>
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
            <FormGroup check>
            <Label check>
            <Input type="checkbox" /> 
           <p className={styles.p}> Belajar Kelompok </p>
            </Label>
            </FormGroup>  
          </form>
  </div>
  
  </div>
  </div>
  );
 };  
}
export default Task2