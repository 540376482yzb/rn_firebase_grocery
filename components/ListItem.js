import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export const ListItem = props => {
	return (
		<TouchableHighlight onPress={props.onPress}>
			<View>
				<Text>{props.item.title}</Text>
			</View>
		</TouchableHighlight>
	)
}

export default ListItem
