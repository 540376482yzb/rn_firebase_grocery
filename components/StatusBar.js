import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export const StatusBar = props => {
	return (
		<View>
			<Text>{props.title}</Text>
		</View>
	)
}
export default StatusBar
