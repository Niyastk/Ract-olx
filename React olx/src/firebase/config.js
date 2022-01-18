import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyD4bLVxNeLcBuhSx9eOsEoQ9wHbclNxpc8',
  authDomain: 'olx-test-fc10e.firebaseapp.com',
  projectId: 'olx-test-fc10e',
  storageBucket: 'olx-test-fc10e.appspot.com',
  messagingSenderId: '154174240770',
  appId: '1:154174240770:web:881367ca35c65d7eea8f1b',
  measurementId: 'G-HZMVSM5024'
}

export default firebase.initializeApp(firebaseConfig)
