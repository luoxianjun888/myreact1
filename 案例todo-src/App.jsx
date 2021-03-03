import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: false },
            { id: '002', name: '睡觉', done: false },
            { id: '003', name: '玩游戏', done: true },
            { id: '004', name: '写代码', done: false },
            { id: '005', name: '逛街', done: true },
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done }
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !==id
        })
        this.setState({todos:newTodos})
    }
    checkAllTodo=(done)=>{
        const {todos}=this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }  
    clearAllDone=()=>{
        const {todos}=this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done===false
        })
        this.setState({todos:newTodos})
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <Header addTodo={this.addTodo} />
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
        )
    }
}