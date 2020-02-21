import React, { Component } from 'react';
import './index.css'
import { Input,Checkbox } from 'antd';
class index extends Component {
    constructor(props){
        super(props);
        this.state ={
            value:"",
            list:[],
            sub:[],
            listLength:0,
            subLength:0
        }
    }
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="content">
                        <p>ToDuList</p>
                        <div className="input">
                            <Input id='newitem' onChange={this.handlekeyUp} onKeyUp={this.onKeyUp}/>
                        </div>
                    </div>    
                </div>
                <div className="wrap">
    <p className="font-1">正在进行 {this.state.listLength}</p>
        <div>{this.state.list.map((item,index)=>{
            return(
                <div className="list-wrap" key={index}>
                    <Checkbox onChange={this.onlistChange.bind(this,index)} checked={item.checked} className="checked"></Checkbox>
                    <p className="name">{item.name}</p>
                    <div className="det">
                    <img className="pic" onClick={this.handlelsitdet.bind(this,index)} src={require('../../assets/det.png')}></img>
                </div>
                </div>
            )
        })}</div>
    <p className="font-1">已经完成 {this.state.subLength}</p>
        <div>{this.state.sub.map((item,index)=>{
            return(
                <div className="list-wrap" key={index}>
                    <Checkbox onChange={this.onsubChange.bind(this,index)} checked={item.checked} className="checked"></Checkbox>
                    <p className="name">{item.name}</p>
                    <div className="det">
                    <img className="pic" onClick={this.handlesubdet.bind(this,index)} src={require('../../assets/det.png')}></img>
                </div>
                </div>
            )
        })}</div>
                </div>
            </div>
        );
    }
    handlekeyUp =(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    onKeyUp=(e)=>{
        if(e.keyCode==13 && this.state.value!==""){
            this.state.list.push({name:this.state.value,checked:false})
            this.setState({
                list:this.state.list,
                value:""
            })
            this.count()
        }
    }
    handlelsitdet(index){
        this.state.list.splice(index,1)
        this.setState({
            list:this.state.list
        })
        this.count()
    }
    handlesubdet(index){
        this.state.sub.splice(index,1)
        this.setState({
            sub:this.state.sub
        })
        this.count()
    }
    onlistChange=(index)=>{
        this.state.sub.push({name:this.state.list[index].name,checked:true})
        this.state.list.splice(index,1)
        this.setState({
            list:this.state.list
        })
        this.count()
    }
    onsubChange=(index)=>{
        this.state.list.push({name:this.state.sub[index].name,checked:false})
        this.state.sub.splice(index,1)
        this.setState({
            sub:this.state.sub
        })
        this.count()
    }
    count(){
        var listLength = this.state.list.length;
        var subLength = this.state.sub.length;
        this.setState({
            listLength,
            subLength
        })
    }
}

export default index;