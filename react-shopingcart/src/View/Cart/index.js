import React, { Component } from 'react';
import list from './dart'
import './index.css'
import { Checkbox,InputNumber } from 'antd';
class index extends Component {
    constructor(props){
        super(props);
        this.state ={
          list,
          checked:true,
          sum:0
        }
      }
      render() {
        return (
            <div className="nav">
                <div className="content">
                <p className="title">购物车</p>
              <table className="table  table-hover">
                <thead>
                  <tr>
                    <th>选择</th>
                    <th>商品</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.list.map((item,index)=>{
                        return(
                            <tr key={item.id}>
                                <td>
                                    <Checkbox onChange={this.onChange.bind(this,index)} checked={item.isSelected}></Checkbox>
                                </td>
                                <td>
                                    <div>
                                        <img className="pic" src={item.productCover} alt=""/>
                                        <p>{item.productName}</p>
                                    </div>
                                </td>
                                <td>
                                    {item.productPrice}
                                </td>
                                <td>
                                <InputNumber min={1} max={10} defaultValue={item.productCount} onChange={this.handleNumber.bind(this,index)} />
                                </td>
                                <td>
                                    {(item.productCount*item.productPrice).toFixed(2)}元
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <Checkbox onChange={this.sumChange.bind(this)}  checked={this.state.checked}>全选</Checkbox>
                        </td>
                        <td>
                            总计：{this.state.sum}元
                        </td>
                    </tr>
                </tbody>
              </table>
                </div> 
            </div>
        );
      }
    
    onChange(index,e){
        this.state.list[index].isSelected = e.target.checked
        var val = this.state.list.every(item=>item.isSelected)
        this.setState({
            list:this.state.list,
            checked:val
        });
        this.sum()
    }
    sumChange(e){
        this.state.list.map(item=>{
            item.isSelected = e.target.checked
        })
        this.setState({
            list:this.state.list,
            checked:e.target.checked
        })
    }
    handleNumber(index,value){
        this.state.list[index].productCount =value;
        this.setState({
            list:this.state.list
        }) 
        this.sum()
    }
    componentDidMount(){
        this.sum()
    }
    sum(){
        var total =0;
        this.state.list.forEach(item=>{
            if(item.isSelected){
                total = item.productCount *item.productPrice+total
            }
        })
        this.setState({
            sum:total.toFixed(2)
        })
    }
}

export default index;