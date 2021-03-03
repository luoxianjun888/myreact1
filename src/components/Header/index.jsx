import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
               <h1 className="my-5">{this.props.title}</h1>
               <hr />
            </React.Fragment>
        )
    }
}
