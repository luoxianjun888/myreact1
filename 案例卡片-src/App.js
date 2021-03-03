import React,{Component} from 'react';
import './app.css';
import Demo from './components/demo/Demo';
import News,{News1,News3} from './components/news'


export default class App extends Component{
    render(){
        return (
            <div>
                <News3/>
                <News/>
                <News1/>
                <News3/>
                <Demo/>
            </div>
        )
    }
}