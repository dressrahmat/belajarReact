import React, { useEffect } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Logo from '../../assets/image/logo-1.png'

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp")
    }, 2000)  
  })

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>

      <Image source={Logo} />
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})