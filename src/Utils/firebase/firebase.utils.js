import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPrOq5qVmIfxYS-w_pNMMlyefB5fnyq5k",
  authDomain: "acoa-db.firebaseapp.com",
  projectId: "acoa-db",
  storageBucket: "acoa-db.appspot.com",
  messagingSenderId: "501455669791",
  appId: "1:501455669791:web:eb12cce3c99a0dcb7b632a",
};

const FirebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const createUserDocFromAuth = async (userAuth) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userDoc = await getDoc(userRef);
  // create new user if user doesn't exist
  if (!userDoc.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createAt,
      });
    } catch (error) {
      console.log("there was a problem creating user", error.message);
    }
    setDoc({
      photoURL,
      displayName,
      email,
      createAt,
    });
  }

  console.log(userDoc.exists());
  console.log(userAuth);
  return userRef;
};
