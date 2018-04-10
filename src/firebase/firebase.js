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

  export { firebase, database as default };


  //
  // //child_removed subscriber
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  //
  // //child_changed subscriber
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  //
  // //child_added subscriber
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });



  //   database.ref('expenses').on('value', (snapshot) => {
  //     const expenses = [];
  //
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push ({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  // });

  // database.ref('expenses').once('value').then((snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push ({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching is: ', error)
  // });
  //
  // database.ref('expenses').once('value').then((snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push ({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });


  // database.ref('expenses').push(
  //   {
  //   description: '1st bs',
  //   note: '',
  //   amount: 3300,
  //   createdAt: ''
  // });

    // database.ref().set ({
    // name: 'Lord Vader',
    // age: 35,
    // bullshitProperty: false,
    // isCool: false,
    // stressLevel: 6,
    // job: {
    //   title: 'software dev',
    //   company: 'gogooogle'
    // },
    // location: {
    //   city: "suckville",
    //   country: "work situation here sucks"
    //   }
    // }).then (() => {
    //   console.log('data is saved');
    // }).catch((e) => {
    //   console.log('this failed because of', e);
    // });

    //Get Entire datatbase object. ref the root() like so and use once
    //Once runs one time and not again, can listen using on instead
    // database.ref()
    // .once('value')
    // .then((snapshot) => {
    //   const val = snapshot.val();
    //   console.log(val);
    // });

    //This listens/subscribes on the database and returns the entire database
    // const onValueChange = database.ref().on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // }, (e) => {
    //   console.log('Error with data fetching is: ', error)
    // });
    // TO UNSUBSCRIBE USE  database.ref().off(onValueChange);

    // const onValueChange = database.ref().on('value', (snapshot) => {
    //   console.log(snapshot.val());
    //   const val = snapshot.val();
    //   console.log(`${val.name} is ${val.age} years old and lives in ${val.location.city}`);
    // }, (e) => {
    //   console.log('Error with data fetching is: ', error)
    // });

    // database.ref().once('value', (snapshot) => {
    //   console.log(snapshot.val());
    //   const namex = database.ref('name');
    //   console.log('Fucking bullshit', namex);
    // });

    // database.ref().update ({
    //   stressLevel: 9,
    //   'job/company': 'amzazon',
    //   'location/city': 'newcity value',
    //   isCool: null
    // });

     // setTimeout(() => {
     //   database.ref('age').set(22);
     // }, 3500);
     // //
     // setTimeout(() => {
     //   database.ref('age').set(29);
     // }, 7000);
     // //
     // setTimeout(() => {
     //  database.ref().off('value', onValueChange);
     //
     // }, 10000);
     //
     // setTimeout(() => {
     //   database.ref('age').set(55);
     // }, 13000);

    // database.ref('isCool').set(null);

  // dataRemover.remove()
  // .then (function() {
  //   console.log('removed');
  // })
  // .catch(function(error) {
  //   console.log('remove SHIT messed up:', error);
  // });

  // var dataRemover = database.ref('isCool');
