import { auth, database, googleAuthProvider } from '../firebase';
const usersRef  = database.ref('users');
export const signIn = () => {
  return dispatch => {
      dispatch({ type: 'ATTEMPTING_LOGIN'})
    auth.signInWithPopup(googleAuthProvider)
  }
};

export const signOut = () => {
  return dispatch => {
      dispatch({ type: 'ATTEMPTING_LOGIN'});
      auth.signOut()
          // .then(() => {
          //     dispatch(signedOut());
          // });
  }

};

const signedIn = user => {
  return {
      type: 'SIGN_IN',
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid
  }
};

const signedOut = () => {
  return {
    type: 'SIGN_OUT',

  }
};

export const startListeningToAuthChanges = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(signedIn(user))
          const { displayName, photoURL, email, uid } = user;
          usersRef.child(user.uid).set({displayName, photoURL, email, uid })
      } else {
        dispatch(signedOut())
      }
    })
  }
};