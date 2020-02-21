import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableHighlight } from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sub:[]
    };
  }
  render() {
    return (
      <View>
        {this.state.sub.map(item=>{
            return(
              <TouchableHighlight>
                <View style={styles.container} > 
                    <Image style={styles.img} source={{uri:item.al.picUrl}}/>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.ar[0].name}</Text>
                </View>
                </TouchableHighlight>
            )
        })}
      </View>
    );
  }
  componentDidMount(){
    let id = this.props.navigation.getParam("id")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    var url =`http://192.168.14.15:5000/playlist/detail?id=${id}`;
    fetch(url).then(res=>res.json()).then(resJson=>{
        this.setState({
            sub:resJson.playlist.tracks
        })
    })
  }
}
const styles=StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    name:{
        width:200
    },
    img:{
      width:100,
      height:100
    }
})
