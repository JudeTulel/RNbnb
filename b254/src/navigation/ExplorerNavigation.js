import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/searchResults';


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{ 
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'Results'}
        component={SearchResultScreen}
        options={{
          title: 'Explore',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
