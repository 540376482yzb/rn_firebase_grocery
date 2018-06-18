import * as firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyCerpwag2cgaXO05i1LrXh3VWsFM8SRXrk',
	authDomain: 'moody-d6aaa.firebaseapp.com',
	databaseURL: 'https://moody-d6aaa.firebaseio.com'
}
firebase.initializeApp(config)
const database = fire.database()
export default database
