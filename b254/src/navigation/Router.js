import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackActions} from "@react-navigation/native";
import React from 'react'
import 'react-native-gesture-handler' 

import HomeTabNavigator from "./HomeTabNavigator";
import Guests from '../screens/Guests'
import LocationSearch from '../screens/LocationSearch/index'
import searchResult from '../screens/searchResults'

const Stack = createStackNavigator();

const Router = (props)=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Explore"
          component={HomeTabNavigator}
          options={{
            headerShown:false
          }}
        />

         <Stack.Screen
          name={'DestinationSearch'}
          component={LocationSearch}
          options={{title:'Search your Destination'}}
          />
           <Stack.Screen
          name={'Guests'}
          component={Guests}
          options={{title:'Great how many guests?'}}
          /> 
          <Stack.Screen
          name={"SearchResults"}
          component={searchResult}
          options={{title:'here is what we found'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router