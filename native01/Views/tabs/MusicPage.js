import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
const {width} =Dimensions.get('window')
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[]
    };
  }

  render() {
    return (
      <View style={styles.container}>{this.state.list.map(item=>{
          return(
              <View style={styles.wrap}>
                  <TouchableOpacity onPress={()=>{this.toggleDetail(item.id)}}>
                    <Image style={{width:100,height:100}} source={{uri:item.coverImgUrl}}/>
                    <Text style={styles.name}>{item.name}</Text>
                  </TouchableOpacity>
              </View>
          )
      })}
      </View>
    );
  }
  componentDidMount(){
      var url ="http://192.168.14.15:5000/top/playlist?cat=%E5%8D%8E%E8%AF%AD";
      fetch(url).then(res=>res.json()).then(resJson=>{
          this.setState({
              list:resJson.playlists
          })
      })
  }
  toggleDetail=(id)=>{
    console.log(id)
    this.props.navigation.navigate('Detail',{id:id})
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