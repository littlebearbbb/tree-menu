import React, { Component } from 'react';
import TreeCheckGroup from '../TreeCheck/TreeCheckGroup';
import TreeCheckItem from '../TreeCheck/TreeCheckItem';
import 'styles/SiderMenu.less';
const data = [{
    id:1001,
    name:'工程研发部门',
    count: 120,
    children:[{
        id: 10010,
        name: 'MAC开发工程师',
        count: 9
    },{
        id: 10011,
        name: 'IOS App 测试工程师',
        count: 17
    },{
        id: 10012,
        name: 'Android 远程控制工程师',
        count: 61
    },{
        id: 10013,
        name:'Web前端工程师',
        count: 31
    },{
        id: 10014,
        name: 'Android 多媒体软件开发工程师',
        count: 2
    }]
},{
    id: 1002,
    name: '产品设计部门',
    count: 136,
    children:[{
        id: 10021,
        name: '网页设计师',
        count: 47
    },{
        id: 10022,
        name: 'ID/工业设计师',
        count: 39
    },{
        id: 10023,
        name: '视觉设计师/GUI界面设计师',
        count: 42
    },{
        id: 10024,
        name: '平面设计师',
        count: 8
    }]
}];


export default class SiderMenu extends Component {

    state = {
        treeData:[]
    }

    componentDidMount () {
        const treeData = this.initData(data);
        this.setState({
            treeData
        });
    }
    initData (data) {
        let treeData = [...data];
        function _init(_data){
            return _data.map((el,key)=>{
                if(el.children&&el.children.length>0){
                    return {
                        ...el,
                        isChecked:false,
                        children:_init(el.children)
                    }
                }else{
                    return {
                        ...el,
                        isChecked:false
                    }
                }
            })
        }
        return _init(treeData);
    }

    generateTree (data) {
        return (
            data.map((el,key)=>(
                <TreeCheckGroup className="tree-group" id={el.id} key={key} name={el.name} count={el.count} checked={el.isChecked}>
                    {el.children&&el.children.length>0&&el.children.map((el1,key1)=>(
                        <TreeCheckItem key={key1} name={el1.name} count={el1.count} checked={el.isChecked} />
                     ))}
                </TreeCheckGroup>
            ))
        );
    }


    render () {
        let { treeData } = this.state;
        return ( 
            <div className="menu-container">
                <div>
                    <div className="clearfix" style={{marginBottom:'23px'}}>
                        <span className="menu-title left">招聘职位</span>
                        <span className="right clear">清空</span>   
                    </div>
                    { this.generateTree(treeData) }
                </div>
            </div> 
        );
    }
}