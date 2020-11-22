import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC-VcdGOlq7YPjO5yVTBgTJmhygg0MjWx8",
  authDomain: "loginreact-ef435.firebaseapp.com",
  databaseURL: "https://loginreact-ef435.firebaseio.com",
  projectId: "loginreact-ef435",
  storageBucket: "loginreact-ef435.appspot.com",
  messagingSenderId: "1032269463456",
  appId: "1:1032269463456:web:3caa48ee774193565eaec5",
  measurementId: "G-VK89NF94WH"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire; 