import React, { Component } from 'react';
import './App.css';
import Appheader from './components/Appheader';
import Welcome from './components/Welcome';
import TodoItem from './components/TodoItem';
import todosData from './components/todosData';


class App extends Component {
    constructor() {
        super();
        this.state = {
            todos : todosData
        }
        this.handelChange = this.handelChange.bind(this);
    }
    handelChange(id){
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos : updateTodos
            }
        })
    }
    render() {
        const todosItems = this.state.todos.map((item) => <TodoItem key = {item.id} item={item} handelChange = {this.handelChange}/>)
        return (
            <div className ="App">
                <div className="Header-text">
                {<Appheader />}
                {<Welcome />}
                </div>
                <div className="todo-list">
                    {todosItems}
                </div>
            </div>
        );
    }
}

export default App;
