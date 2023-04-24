import { Component} from "react";

import OnBtn from "../../../OnBtn/OnBtn";


import "./TodoListItem.css"
class TodoListItem extends Component{

 
    render(){

        const{text, completed, onDelet, onCompleted, id}=this.props
        return(
            <div className="todo__item">
                <input
                type="checkbox" 
                checked={completed}
                onChange={() => onCompleted(id)}/>
                <span>{text}</span>
                <OnBtn 
                    title={"🗑️"}
                    className={'form__btn'}
                    onClick ={onDelet}
                    />
            </div>
        )
    }
}

export default TodoListItem