import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MusicPage from '../Views/tabs/MusicPage'
import MvPage from '../Views/tabs/MvPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
const TabNavigator =createBottomTabNavigator({
    Music:{
        screen:MusicPage,
        navigaionOptions:{
            tabBarLabel:"音乐"
        }
    },
    Mv:MvPage
},{
    tabBarOptions:{
        activeTintColor:'#c20c0c',
        inactiveTintColor:'#333',
        style:{
            backgroundColor:'#4442'
        },
        labelStyle:{
            fontSize:18
        }
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Music') {
            iconName = `ios-musical-notes`;
          } else if (routeName === 'Mv') {
            iconName = `ios-videocam`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      navigationOptions:({navigation})=>{ 
        const {routeName} = navigation.state.routes[navigation.state.index];
        if (routeName === 'Music') {
            return {
                headerTitle:"音乐"
            }
          } else if (routeName === 'Mv') {
            return {
                headerTitle:"Mv"
            }
          }
}
})
export default TabNavigator