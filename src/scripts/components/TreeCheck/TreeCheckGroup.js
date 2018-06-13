
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
        checked: PropTypes.bool,
        onChange: PropTypes.func
    };
    
    renderChildren (props) {
        return React.Children.map(this.props.children,child=>{
            if(child.type === TreeCheckItem){
                return React.cloneElement(child,{
                    parentId:this.props.id
                });
            }else{
                return null;
            }
        })
    }
    render () {
        const { id, name, count, checked, onChange } = this.props;
        return (
            <div className="group-container">
                <div className="clearfix item-container">
                    <div className="left v-center">
                        <span className="checkbox" onClick={()=>{ onChange(!checked,id) }} >{checked&&<i className="iconfont icon-duigou select"></i>}</span>
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