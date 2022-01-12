import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Containers/Dashboard';
import Profile from "../Containers/Profile";
const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
