import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref().set({});


// HOW TO REMOVE DATA
// get a reference to the data first 
// database.ref('expenses/-LA8mPmcFfd_cDNGg5jd').remove().then(()=> {console.log('removed');}).catch((e)=> {console.log('error', e);})

// database.ref().set({
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: ' ',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: ' ',
//     amount: 1905,
//     createdAt: 134234230
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added -- gets called for exisiting children, not just when a child gets added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref().on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching. ', e)
// });
