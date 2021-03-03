import React, { Component } from 'react'
import Item from '../Item'
import './list.css'

export default class List extends Component {
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo,index)=>{
                        return <Item key={index} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
