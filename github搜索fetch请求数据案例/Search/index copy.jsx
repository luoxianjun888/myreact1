import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search=async ()=>{
        const {KeyWordElment:{value:KeyWord}}=this
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        // axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(res=>{
        //     PubSub.publish('atguigu',{isLoading:false,users:res.data.items})
        // },err=>{
        //     PubSub.publish('atguigu',{isLoading:false,err:err.message})
        // })
        // fetch(`https://api.github.com/search/users?q=${KeyWord}`).then(res=>{
        //     return res.json()
        // }).then(res=>{
        //     console.log(res)
        //     PubSub.publish('atguigu',{isLoading:false,users:res.items})
        // }).catch(error=>console.log(error))
        const response=await fetch(`https://api.github.com/search/users?q=${KeyWord}`)
        const resdata=await response.json()
        PubSub.publish('atguigu',{isLoading:false,users:resdata.items})
    }
    render() {
        return (
                <section className="jumbotron my-m-15">
                    <h3 className="mb-4">搜索一下</h3>
                    <div className="form-inline mt-2 mt-md-0">
                        <input ref={c=>this.KeyWordElment=c} className="form-control mr-sm-2" type="text" placeholder="输入关键词"/>
                        <button onClick={this.search} className="btn btn-outline-dark my-2 my-sm-0">搜索</button>
                    </div>
                </section>
        )
    }
}
