import React, { Component } from 'react';
import queryString from 'query-string'
class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            img:"",
            summsry:""
        }
    }
    render() {
        return (
            <div className="content">
                <img src={this.state.img}></img>
                <p>{this.state.title}</p>
                <p>{this.state.summsry}</p>   
            </div>
        );
    }
    componentDidMount(){
        var url = this.props.location.search;
        var ids = queryString.parse(url);
        var id = ids.id;
        this.$http.get(`https://douban.uieee.com/v2/movie/subject/${id}`).then(res=>{
            this.setState({
                title:res.data.title,
                img:res.data.images.small,
                summsry:res.data.summary
            })
        })
    }
}

export default Detail;