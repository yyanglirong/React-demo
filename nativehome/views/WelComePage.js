import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window')
export default class WelCome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/1.jpg")}/>
      </View>
    );
  }
  componentDidMount(){
    this.Timer = setTimeout(()=>{
      this.props.navigation.navigate("Home")
    },2000)
  }
}
const styles = StyleSheet.create({
  image:{
    width:width,
    height:height
  }
})
