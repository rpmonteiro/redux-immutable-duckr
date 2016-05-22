import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAbQ0zN0yF3JBfdJipao2hdafhU1lrsZs0',
  authDomain: 'tennisapp-1316.firebaseapp.com',
  databaseURL: 'https://tennisapp-1316.firebaseio.com',
  storageBucket: 'tennisapp-1316.appspot.com',
}

export const ref = Firebase.initializeApp(config)
export const facebookProvider = new Firebase.auth.FacebookAuthProvider()
