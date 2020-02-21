import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

export default class MvPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sub:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>{this.state.sub.map(item=>{
          return(
              <View style={styles.wrap}>
                <Image style={{width:100,height:100}} source={{uri:item.cover}}/>
                <Text>{item.name}</Text>
              </View>
          )
      })}
      </View>
    );
  }
  async componentDidMount(){
      var url = "http://192.168.14.15:5000/mv/first";
      var data = await fetch(url);
      var resJson = await data.json()
      this.setState({
          sub:resJson.data
      })
  }
}
const styles=StyleSheet.create({
    container:{
        flexWrap:"wrap",
        justifyContent:"space-between",
        marginTop:20,
        flexDirection: 'row'
    },
    wrap:{
        width:100,
        height:150,
    }
})
