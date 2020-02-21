import React, { Component } from 'react';

class Music extends Component {
    constructor(props){
        super(props);
        this.state={
            datas:[]
        }
    }
    render() {
        return (
            <div className="container">{this.state.datas.map(item=>{
                return(
                    <div key={item.id}>
                        <img src={item.cover}></img>
                        <p>{item.name}</p>
                    </div>
                )
            })}
                音乐
            </div>
        );
    }
    componentDidMount(){
        var url ="http://192.168.14.15:5000/mv/first"
        this.$http.get(url).then(res=>{
            this.setState({
                datas:res.data.data
            })
        })
    }
}

export default Music;