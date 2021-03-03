import React, { Component } from 'react'
import Search from './Search'
import List from './List'

export default class App extends Component {
    state={users:[],isFirst:true,isLoading:false,err:''}
    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
