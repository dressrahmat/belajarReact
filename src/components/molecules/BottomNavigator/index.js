import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BookmarkOn, CalenderOn, CalenderOff, HomeOff, HomeOn, ProfileOn, ProfileOff, BookmarkOff } from '../../../assets/icon'

const Icon = ({label, focus}) => {
    switch(label){
        case 'Home':
            return focus ? <Image source={HomeOn} /> : <Image source={HomeOff} />
        case 'Pesanan':
            return focus ? <Image source={CalenderOn} /> : <Image source={CalenderOff} />
        case 'Whistlist':
            return focus ? <Image source={BookmarkOn} /> : <Image source={BookmarkOff} />
        case 'Profile':
            return focus ? <Image source={ProfileOn} /> : <Image source={ProfileOff} />
        default:
            return <Image source={HomeOn} />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
          >
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 50,
        backgroundColor: 'white'
    }
})