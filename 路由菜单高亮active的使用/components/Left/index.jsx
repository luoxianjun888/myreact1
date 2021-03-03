import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Left extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="nav flex-column nav-pills">
                        <NavLink className="nav-link" to="/home">返回首页</NavLink>
                        <NavLink className="nav-link"  to="/about">关于我们</NavLink>
                </div>
            </div>
        )
    }
}
