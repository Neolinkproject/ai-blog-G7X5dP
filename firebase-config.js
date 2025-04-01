import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
apiKey: 'your-api-key',
authDomain: 'your-project-id.firebaseapp.com',
databaseURL: 'https://your-database-url.firebaseio.com',
projectId: 'your-project-id',
storageBucket: 'your-project-bucket.appspot.com',
messagingSenderId: 'your-sender-id',
appId: 'your-app-id'
};

firebase.initializeApp(firebaseConfig);
