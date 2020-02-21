import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,FlatList, Group} from 'react-native'
class App extends Component {
  state={
    music:[]
  }
  render() {
    return (
        <View style={styles.container}>
          {this.state.music.map(item=>{
            return (
              <View style={styles.child}>
                <Image style={styles.img} source={{uri:item.coverImgUrl}}/> 
                <Text>{item.name}</Text>
              </View>
            )
          })}
        </View>
    );
  }
  componentDidMount(){
    var url ="http://192.168.14.15:5000/top/playlist";
    fetch(url).then(res=>res.json()).then(resJson=>{
      this.setState({
        music:resJson.playlists
      })
    })
  }
}
const styles=StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent:"space-around",
    flexWrap:"wrap"
  },
  child:{
    width:100,
    height:150
  },
  img:{
    width:100,
    height:100
  }
})
export default App;