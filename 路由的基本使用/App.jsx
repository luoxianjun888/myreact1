import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Left from './components/Left'
import About from './About'
import Home from './Home'


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="my-5">美景文化</h1>
                <hr />
                <div className="row mt-5">
                        <Left />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                </div>
            </div>
        )
    }
}
