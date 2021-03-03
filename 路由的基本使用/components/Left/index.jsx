import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Left extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="nav flex-column nav-pills">
                        <Link className="nav-link active" to="/home">返回首页</Link>
                        <Link className="nav-link"  to="/about">关于我们</Link>
                        <Link className="nav-link" to="/home" >新闻列表</Link>
                        <Link className="nav-link" to="/about" >客户留言</Link>
                </div>
            </div>
        )
    }
}
