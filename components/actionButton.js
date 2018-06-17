import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export const ActionButton = props => {
  return(
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <Text>{props.title}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ActionButton