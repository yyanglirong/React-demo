import React from 'react';
import Title from './sytled-components/Wrapper'
import Item from './components/Item'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      playlists:[]
    }
  }
  render(){
    return (
      <div className="App">
        <Title>
        {this.state.playlists.map(item=>{
        return (
            <div className="item" key={item.id}>
              <Item deleteItem={this.handleDelete.bind(this)} items={item}/>
            </div>
            )
        })}
        </Title>
      </div>
    )
  }
  componentDidMount(){
    var url = "https://music.aityp.com/top/playlist?cat=华语"
    this.$http.get(url).then(res=>{
      this.setState({
        playlists:res.data.playlists
      })
    })
  }
  handleDelete(id){
    var playlists = this.state.playlists.filter(item=>item.id!==id)
    this.setState({
      playlists
    })
  }
}

export default App;