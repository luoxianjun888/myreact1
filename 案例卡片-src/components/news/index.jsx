import React,{Component} from 'react';
import {Img1,Img2,Img3} from './Img'
import news from './css/news.module.css'

export default class News extends Component{
    render(){
        return (
            <div className="div1">
                <h1 className='title'>新闻列表</h1>
                <Img1/>
            </div>
        )
    }
}

export class News1 extends Component{
    render(){
        return (
            <div className={news.div1}>
                <h1 className='title'>推荐内容</h1>
                <Img2/>
            </div>
        )
    }
}

export class News3 extends Component{
    render(){
        return (
            <div className="div1">
                <h1 className='title'>特别策划</h1>
                <Img3/>
            </div>
        )
    }
}