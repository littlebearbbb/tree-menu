import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/TreeCheck.less';
import 'styles/font.css';

export default class TreeCheckItem extends Component {
    //参数类型
    static propTypes = {
        name: PropTypes.string,
        count: PropTypes.number,
        isChecked: PropTypes.bool,
    };
    render(){
        const { name, count, isChecked } = this.props;
        return (
            <div className="item-container clearfix">
                <div className="left v-center">
                    <span className="checkbox"></span>
                    <span className="item-name">{name}</span>
                </div>
                <div className="right item-count">
                    {count}
                </div>
            </div>
        )
    }
}