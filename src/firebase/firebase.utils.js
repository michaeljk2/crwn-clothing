// mit dieser Methodik importiert man von firebase erstmal nur app
// die nächsten Imports muss man aber nicht mehr als firebase deklarieren
// da reicht es nur noch vom selben dependency weitere teile einfach zu "nachzuladen"
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCe5zokK1hWyAMVRc6Wy-yqnZPWoSkaTGg",
    authDomain: "crwn-db-bae93.firebaseapp.com",
    databaseURL: "https://crwn-db-bae93.firebaseio.com",
    projectId: "crwn-db-bae93",
    storageBucket: "crwn-db-bae93.appspot.com",
    messagingSenderId: "657302769898",
    appId: "1:657302769898:web:ae038969361ceeea908793",
    measurementId: "G-ZQ0S6ND78T"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters( { prompt: 'select_account' } )
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase