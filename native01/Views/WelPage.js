import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions,Button,TouchableHighlight } from 'react-native';
const {width,height} = Dimensions.get('window')
export default class WelPage extends Component {
  render() {
    return (  
      <View>
        <Image style={styles.image} source={require("../assets/1.jpg")}/>
        <TouchableHighlight onPress={()=>{this.toggledet()}} style={styles.btn}>
          <Text style={styles.font}>跳过</Text>
        </TouchableHighlight>
        </View>
    );
  }
  componentDidMount(){
      this.timer = setTimeout(()=>{
          this.props.navigation.navigate("Home")
      },3000)
  }
  componentWillUnmount(){
    if(this.timer){
        clearTimeout(this.timer)
    }
}
  toggledet=()=>{
    this.props.navigation.navigate("Home")
  }
}
const styles= StyleSheet.create({
    image:{
        width:width,
        height:height
    },
    btn:{
     padding:10,
     borderColor:'blue',
     borderWidth:1,
     borderRadius:5,
     width:50,
     position:"absolute",
     backgroundColor:'blue',
    },
    font:{
      color:"#fff"
    }
})
