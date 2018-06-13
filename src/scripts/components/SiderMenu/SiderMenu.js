import React, { Component } from 'react';
import TreeCheckGroup from '../TreeCheck/TreeCheckGroup';
import TreeCheckItem from '../TreeCheck/TreeCheckItem';
import 'styles/SiderMenu.less';


export default class SiderMenu extends Component {


    render () {
        return ( 
            <div className="menu-container">
                <div>
                    <div className="clearfix" style={{marginBottom:'23px'}}>
                        <span className="menu-title left">招聘职位</span>
                        <span className="right clear">清空</span>   
                    </div>
                    <TreeCheckGroup />
                    <div className="check-item-container">
                        <TreeCheckItem />
                        <TreeCheckItem />
                        <TreeCheckItem />
                        <TreeCheckItem />
                        <TreeCheckItem />
                        <TreeCheckItem />
                    </div>
                </div>
            </div> 
        );
    }
}