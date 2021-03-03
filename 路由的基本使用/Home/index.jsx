import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="col-9">
                <div className="px-5">
                    <h2 className="mb-5">网站首页</h2>
                    <p>
                        重要且紧急的事，第一时间做！
                        重要但不紧急的事，规划着做！
                        不重要但紧急的事筛选着做！
                        不重要不紧急的事——可做可不做
                    </p>
                </div>
            </div>
        )
    }
}
