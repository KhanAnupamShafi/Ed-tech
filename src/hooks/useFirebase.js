import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  //Google Sign-in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    //Force pop up when signed in previously with a single google account
    console.log(user + `aaa`);
    return signInWithPopup(auth, googleProvider);

    // console.log(user);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    authError,
    isLoading,
    handleGoogleSignIn,
    registerUser,
    logOut,
    signInUser,
  };
};
export default useFirebase;
