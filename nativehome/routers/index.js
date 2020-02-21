import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage'
import WelComePage from '../views/WelComePage'
const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: HomePage,
        navigationOptions:{
            headerTitle:"网易云",
            headerStyle:{
                backgroundColor:"#c20c0c"
            },
            headerTitleStyle:{
                color:"#fff"
            },
            headerLeft:null
        }
      },
      WelCome:{
          screen:WelComePage,
          navigationOptions:{
              header:null
          }
      }
    },
    {
      initialRouteName:"WelCome"
    }
  );
  export default createAppContainer(AppNavigator);