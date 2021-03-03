import React,{Component} from 'react';
import imgcss from './css/news.module.css'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.png'
import img4 from './img/4.jpg'
import img5 from './img/5.png'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
export  class Img1 extends Component{
    render(){
        return (
            <div>
                <img src={img1} height='300' alt=""/> &nbsp;&nbsp;&nbsp;
                <img src={img2} height='300' alt=""/>
                <h4 className='title'>图片列表</h4>
            </div>
        )
    }
}


export  class Img2 extends Component{
    render(){
        return (
            <div>
            <div className={imgcss.round}>
                <div className={imgcss.imgitem}><img src={img3} alt=""/> </div>
                <div className={imgcss.imgitem}><img src={img5}  alt=""/></div>
                <div className={imgcss.imgitem}><img src={img4}  alt=""/></div>
            </div>
                <h4 className='title'>热点关注</h4>
            </div>
        )
    }
}

export  class Img3 extends Component{
    render(){
        return (
            <div>
                <img src={img6} height='300' alt=""/> &nbsp;&nbsp;&nbsp;
                <img src={img7} height='300' alt=""/> &nbsp;&nbsp;&nbsp;
                <img src={img8} height='300' alt=""/>
                <h4 className='title'>查看更多</h4>
            </div>
        )
    }
}