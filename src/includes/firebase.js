import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD_qffJqycEe0x91dfoCvVFa4bS_-Tn4lg',
  authDomain: 'music-51fe5.firebaseapp.com',
  projectId: 'music-51fe5',
  storageBucket: 'music-51fe5.appspot.com',
  messagingSenderId: '996539793905',
  appId: '1:996539793905:web:f6f340fa7c054355d34450'
}

const app = firebase.initializeApp(firebaseConfig)

/** 登录认证模块 */
const auth = app.auth()

const db = app.firestore()

const usersCollection = db.collection('users')

export { auth, usersCollection }
