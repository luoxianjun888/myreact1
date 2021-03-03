import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search=()=>{
        const {KeyWordElment:{value:KeyWord}}=this
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`/luo/api?q=${KeyWord}`).then(res=>{
            console.log('请求成功',res.data)
            this.props.updateAppState({isLoading:false,users:res.data})
        },err=>{
            this.props.updateAppState({isLoading:false,err:err.message})
        })
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
