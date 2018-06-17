import React from 'react'
import {Text, View, FlatList} from 'react-native'
import styles from './styles/app.style'
import StatusBar from './components/StatusBar'
import ListItem from './components/ListItem'
import ActionButton from './components/actionButton'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			groceries: [{title: 'pizza'}, {title: 'soda'}, {title: 'banana'}]
		}
	}
	_renderItems = item => {
		return <ListItem item={item} />
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar />
				<FlatList
					extraData={this.state.groceries}
					renderItem={this._renderItem}
					keyExtractor={(item, index) => index}
				/>
			</View>
		)
	}
}
