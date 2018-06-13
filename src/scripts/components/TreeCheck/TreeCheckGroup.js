
import React, { Component } from 'react';
import 'styles/TreeCheck.less';
import 'styles/font.css';


export default class TreeCheckGroup extends Component {
    

    render () {
        const { children } = this.props;
        return (
            <div className="group-container clearfix">
                <div className="left v-center">
                    <span className="checkbox"></span>
                    <span className="group-name">工程研发部门</span>
                    <span className="iconfont icon-xiangxiajiantou arrow"></span>
                </div>
                <div className="right count-container">
                    120
                </div>
            </div>
        )
    }
}