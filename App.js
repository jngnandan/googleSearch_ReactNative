
// App.js

import { NativeWindStyleSheet } from "nativewind";

import {Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Home from './components/Home'

const words = [
  {
    id: 1,
    keyword: 'Price of Etherium'
  },
  {
    id: 2,
    keyword: 'Oculus Quest 2 Specs'
  },
  {
    id: 3,
    keyword: 'Tesla share price'
  },
  {
    id: 4,
    keyword: 'Latest trends in ML'
  },
  {
    id: 5,
    keyword: 'Latest trends in AI'
  },
  {
    id: 6,
    keyword: 'Price of Etherium today'
  },
]

const App = () => {
  const [searchInput, setSearchInput] = React.useState(words)
  const [suggestedInput, setSuggestedInput] = React.useState('')

  const img = {uri: 'https://assets.ccbp.in/frontend/react-js/google-logo.png'}
  const search = {uri: 'https://assets.ccbp.in/frontend/react-js/google-search-icon.png'}
  const arrow = {uri: 'https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png'}

  const enterText = (text) => {
    setSearchInput(words.filter((item) => item.keyword.toLowerCase().includes(text.toLowerCase())))
    setSuggestedInput(words)
  }

  const updateSuggestions = ({keyword}) => {
    setSearchInput(words.filter((item) => item.keyword.toLowerCase().includes(keyword.toLowerCase())))
    setSuggestedInput(keyword)
  }


  return (
    <View>
     <View className="flex-col justify-center items-center h-screen mt-56">
      <Image source={img} className="h-32 w-96"/>
      <View className="flex flex-row justify-center items-center align-middle mt-4">
        <TextInput value={suggestedInput} onChangeText={enterText} className="border border-1 w-72 p-3 rounded" />
        <TouchableOpacity className="bg-gray-300 p-3 px-8 rounded">
          <Image source={search} className="h-5 w-5"/>
        </TouchableOpacity>
      </View>
      <View className="pl-9">
        <FlatList 
          data={searchInput}
          renderItem={({item}) => (
            <View className="flex flex-row justify-between items-center py-2 w-5/6">
            <Home search={item} updateSuggestions={updateSuggestions} arrow={arrow} />
            <Image source={arrow} className="h-5 w-5" />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

     </View>
    </View>
  )
}

export default App


NativeWindStyleSheet.setOutput({
  default: "native",
});