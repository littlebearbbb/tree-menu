import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/TreeCheck.less';
import 'styles/font.css';

export default class TreeCheckItem extends Component {
    //参数类型
    static propTypes = {
        id: PropTypes.number,
        parentId: PropTypes.number,
        name: PropTypes.string,
        count: PropTypes.number,
        checked: PropTypes.bool,
        onChange: PropTypes.func
    };
    render(){
        const { id, name, count, checked, parentId, onChange } = this.props;
        
        return (
            <div className="item-container clearfix">
                <div className="left v-center">
                    <span className="checkbox" onClick={()=>{ onChange(!checked,parentId,id) }} >{checked&&<i className="iconfont icon-duigou select"></i>}</span>
                    <span className="item-name">{name}</span>
                </div>
                <div className="right item-count">
                    {count}
                </div>
            </div>
        )
    }
}