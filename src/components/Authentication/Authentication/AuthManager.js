import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';


export const initializeAuthApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            setTokenId();
            const { displayName, email } = res.user;
            return {
                name: displayName,
                email
            }
        })
        .catch(err => {
            return {
                errorCode: err.code,
                errorMsg: err.message
            }
        })
}

export const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            setTokenId();
            const { displayName, email } = res.user;
            return {
                name: displayName,
                email
            }
        })
        .catch(err => {
            return {
                errorCode: err.code,
                errorMsg: err.message
            }
        })
}

const setTokenId = () => {
    firebase
        .auth()
        .currentUser
        .getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('key', idToken)
        }).catch(error => {
            console.log(error)
        });
}