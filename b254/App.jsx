import { Text,SafeAreaView, Image, ScrollView,FlatList } from 'react-native'
import React from 'react';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import SearchResultScreen from './src/screens/searchResults';
import feed from './Assets/data/feed';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router'
import { StatusBar, } from 'react-native';
const App = () => {
  return (
    
    <>
    <StatusBar barStyle="dark-content" />
  
   <Router/>

    
    </>
  )
}

export default App