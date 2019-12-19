import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyCqH2fo7_lB_ZU-TTEpd-_zxcK4Ct3nxz0',
    authDomain: 'authtesting-159bf.firebaseapp.com',
    databaseURL: 'https://authtesting-159bf.firebaseio.com',
    projectId: 'authtesting-159bf',
    storageBucket: 'authtesting-159bf.appspot.com',
    messagingSenderId: '892837219849',
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.serverValue = app.database.ServerValue;
      this.auth = app.auth();
      this.db = app.database();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
    
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    message = uid => this.db.ref(`messages/${uid}`);
    messages = () => this.db.ref('messages');
  }
  
  
  export default Firebase;