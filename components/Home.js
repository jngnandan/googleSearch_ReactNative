
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from "nativewind";


const Home = ({search, updateSuggestions}) => {

  const {keyword} = search

 const updateText = () => {
    // const {keyword} = search
    updateSuggestions({keyword})
    // console.log(keyword)
  }

  return (
    <TouchableOpacity onPress={updateText}  className="flex flex-row w-full my-2">
              <Text value={keyword} className="ml-2">{keyword}</Text>
              {/* <Image source={arrow} className="h-5 w-5" /> */}
    </TouchableOpacity>
  )
}

export default Home

NativeWindStyleSheet.setOutput({
  default: "native",
});