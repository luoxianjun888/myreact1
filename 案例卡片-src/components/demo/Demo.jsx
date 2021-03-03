import React,{Component} from 'react';
import {Box} from './Box';
import {Life} from './Life';
import {Meijing} from './Meijing';

export default class Demo extends Component {
    render() {
        return (
            <div className="div1">
                <Life/>
                <Box/>
                <Meijing/>
            </div>
        )
    }

}
