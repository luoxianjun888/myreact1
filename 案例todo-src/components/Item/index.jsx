import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    state={mouse:false}
    handleMouse=(flag)=>{
        return ()=>{
           this.setState({mouse:flag})
        }
    }
    hanldeCheck=(id)=>{
        return (e)=>{
            this.props.updateTodo(id,e.target.checked)
        }
    }
    handleDelete=(id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done} = this.props
        return (
            <li style={{backgroundColor:this.state.mouse? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.hanldeCheck(id)} />
                    <span> {name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display:this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
