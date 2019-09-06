import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'
import {ListGroup} from 'react-bootstrap'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos:todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos:updatedTodo 
            }
             
        })
    }


    render(){
        const todoComponent = this.state.todos.map(dataItem => <TodoItem key={dataItem.id} item={dataItem} handleChange={this.handleChange}/>)
        return (
            <div className="container todo-list">
                <ListGroup>
                <ListGroup.Item>{todoComponent}</ListGroup.Item>
                </ListGroup>
                
            </div>
        )
    }
}

export default App