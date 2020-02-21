import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Movie extends Component {
    constructor(props){
        super(props);
        this.state={
            sub:[]
        }
    }
    render() {
        return (
            <div className="container">{this.state.sub.map(item=>{
                return(
                        <div key={item.id}>
                            <Link to={`/detail?id=${item.id}`}>
                            <img src={item.images.small}></img>
                            <p>{item.title}</p>
                            </Link>
                        </div>
                )
            })}
            </div>
        );
    }
    componentDidMount(){
        var url = "https://douban.uieee.com/v2/movie/top250"
        this.$http.get(url).then(res=>{
          this.setState({
            sub:res.data.subjects
          })
        })
      }
}

export default Movie;