import React, { Component } from 'react';
import 'styles/TreeCheck.less';
import 'styles/font.css';

export default class TreeCheckItem extends Component {
    render(){
        return (
            <div className="item-container clearfix">
                <div className="left v-center">
                    <span className="checkbox"></span>
                    <span className="item-name">MAC开发工程师</span>
                </div>
                <div className="right item-count">
                    10
                </div>
            </div>
        )
    }
}