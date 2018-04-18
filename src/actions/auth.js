import { firebase } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = (provider) => {
    return () => {
        return firebase.auth().signInWithPopup(provider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};