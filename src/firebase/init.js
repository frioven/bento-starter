import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyA_gMJlkh2sJcWiWCLR8rejv0duCIrPZ2g",
  authDomain: "sitiowebfrioven.firebaseapp.com",
  databaseURL: "https://sitiowebfrioven.firebaseio.com",
  projectId: "sitiowebfrioven",
  storageBucket: "sitiowebfrioven.appspot.com",
  messagingSenderId: "69312608195",
  appId: "1:69312608195:web:7f5dfa99512cae45622f76"

}

firebase.initializeApp(config)
