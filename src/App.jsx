import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Left from './components/Left'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Header title={'美景文化传播'}/>
                <div className="row mt-5">
                        <Left />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                </div>
            </div>
        )
    }
}
