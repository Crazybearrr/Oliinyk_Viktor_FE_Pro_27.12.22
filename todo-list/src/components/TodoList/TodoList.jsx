import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import TodoListItem from './components/TodoListItem/TodoListItem';
import TodoAddForm from '../TodoAddForm/TodoAddForm';

import todos from '../data/mockTodos';

import "./TodoList.css"

class TodoList extends Component{
    state = {
        todos: todos,
    };
    
    onDeletTodo =(id)=>{
        this.setState(({todos})=>{
            return{
                todos: todos.filter(el=> el.id !== id)
            }
        })
    };

    onCreateTodo =(text)=>{
            const newTodo = {
                id: uuidv4(),
                text: text,
                completed: false
            };
            this.setState((prevState)=>({
                todos:[...prevState.todos, newTodo]
            }))
     

    };
    
    onCompleted = (id) => {
        this.setState(({ todos }) => {
          return {
            todos: todos.map((todo) => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                };
              } else {
                return todo;
              }
            }),
          };
        });
      };
   
    render(){
        const element = this.state.todos.map(todo =>{
            const{id, ...todoProps} = todo;
            return(
                 <TodoListItem
                        key={todo.id}
                        {...todoProps}
                        onDelet={()=>this.onDeletTodo(todo.id)}
                        onCompleted={() => this.onCompleted(todo.id)}
                        />
            )
        })
        
        return(
            <div className='wrap__todo_list'>
                {element}
                <TodoAddForm
                    onCreate={this.onCreateTodo}/>
            </div>
            
        )
    }
}


export default TodoList