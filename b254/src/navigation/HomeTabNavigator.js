import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigation from './ExplorerNavigation'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigation}
        options={{
            tabBarIcon:({color}) =>(
                <Fontisto name="search" size={25} color={'orange'} />
                
            ),
            headerShown:false
        }}
        />
      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
            tabBarIcon:({color}) =>(
                <Fontisto name="bookmark" size={25} color={'orange'} />
                
            ),
            headerShown:false
        }}
        />
      <Tab.Screen
        name={'chats'}
        component={HomeScreen}
        options={{
            tabBarIcon:({color}) =>(
                <Feather name='message-square' size={25} color={'orange'} />
                
            ),
            headerShown:false
        }}
        />
      <Tab.Screen
        name={'profile'}
        component={HomeScreen}
        options={{
            tabBarIcon:({color}) =>(
              <EvilIcons name='user'size={35} color={'orange'} />
                
            ),
            headerShown:false
        }}
        />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;