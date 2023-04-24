import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import OnBtn from '../OnBtn/OnBtn';


import './TodoAddForm.css'

class TodoAddForm extends Component{
    state = {
            id: uuidv4(),
            text: '',
            completed: false
    }


    render(){
        
        const{onCreate} = this.props;

        const {text}=this.state
        return(
            <div className="wrap__form">
                <input 
                    className="form__input" 
                    type="text"
                    placeholder="Что Вы хотите сегодня сделать?"
                    name="text"
                    value={text}
                    onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/>

                <OnBtn 
                    title={"➕"}
                    className={'form__btn'}
                    onClick ={()=>onCreate(text)} 
                    />
        </div>
        )
    }
}

export default TodoAddForm