import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './list.css'

export default class List extends Component {
    state={users:[],isFirst:true,isLoading:false,err:''}
    componentDidMount(){
       this.token = PubSub.subscribe('atguigu',(msg,data)=>{
            this.setState(data)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2 className="text-center my-5 w-100">欢迎使用，输入关键词，然后点击搜索</h2> :
                    isLoading ? <h2 className="text-center my-5 w-100 my-anim">加载中，请稍后……</h2> : 
                    err ?  <h2 className="text-center my-5 w-100">{err}</h2> :
                    users.map((item) => {
                       return <div className="col-md-4" key={item.id}>
                            <div className="card mb-4 shadow-sm">
                                <a className="list-img text-center" href={item.html_url} target="_blank" rel="noopener noreferrer"><img src={item.avatar_url} alt="" /></a>
                                <div className="card-body">
                                    <p className="card-text text-center">{item.login}</p>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        )
    }
}
