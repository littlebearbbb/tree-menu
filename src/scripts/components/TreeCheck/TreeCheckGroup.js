
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TreeCheckItem from './TreeCheckItem';
import 'styles/TreeCheck.less';
import 'styles/font.css';


export default class TreeCheckGroup extends Component {
    //参数类型
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        count: PropTypes.number,
        isChecked: PropTypes.bool,
    };
    
    renderChildren (props) {
        return React.Children.map(this.props.children,child=>{
            if(child.type === TreeCheckItem){
                return React.cloneElement(child);
            }else{
                return null;
            }
        })
    }
    render () {
        const { children,name,count } = this.props;
        return (
            <div className="group-container">
                <div className="clearfix item-container">
                    <div className="left v-center">
                        <span className="checkbox"></span>
                        <span className="group-name">{name}</span>
                        <span className="iconfont icon-xiangxiajiantou arrow"></span>
                    </div>
                    <div className="right count-container">
                        {count}
                    </div>  
                </div>
                <div className="check-item-container">
                    { this.renderChildren(this.props) }
                </div>

            </div>
        )
    }
}