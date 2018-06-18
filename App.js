import React from 'react'
import {Text, View, FlatList} from 'react-native'
import styles from './styles/app.style'
import StatusBar from './components/StatusBar'
import ListItem from './components/ListItem'
import ActionButton from './components/actionButton'
import dataBase from './firebase'
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			groceries: [{title: 'pizza'}, {title: 'soda'}, {title: 'banana'}]
		}

		this.itemsRef = firebaseApp.database().ref()
	}
	_renderItems = (item, index) => {
		return <ListItem item={item} index={index} />
	}

	componentDidMount() {
		listenForItems(this.itemRef)

		const listenForItems = itemRef => {
			itemRef.on('value', snap => {
				console.log(snap)
			})
		}
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
