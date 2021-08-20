import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBxR2DSF2ByKEwdCAqKs2vwNRnp8kUeBpM",
	authDomain: "crwn-db-311bb.firebaseapp.com",
	projectId: "crwn-db-311bb",
	storageBucket: "crwn-db-311bb.appspot.com",
	messagingSenderId: "286026511276",
	appId: "1:286026511276:web:7153c74254ea0095640009",
	measurementId: "G-K1MCC98FX2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
