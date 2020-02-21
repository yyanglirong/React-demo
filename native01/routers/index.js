import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tabs from './tabs'
import WelPage from '../Views/WelPage';
import Detail from '../Views/Detail';
const AppNavigator = createStackNavigator(
    {
      Home: {
        screen:Tabs,
        navigationOptions:{
          headerLeft:null
        }
      },
      Wel:{
          screen:WelPage,
          navigationOptions:{
              header:null
          }
      },
      Detail:{
          screen:Detail,
          navigationOptions:{
            headerTitle:"详情页"
        }
      }
    },
    {
      initialRouteName:"Wel",
      defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#c20c0c"
        },
        headerTitleStyle:{
            color:"#fff"
        },
        headerTintColor:"#fff"
      }
    }
  );
  
  export default createAppContainer(AppNavigator);