import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      
      // ...
    })
    .catch((e) => {
     console.error("Invalid Credentials"+ e);
      // ..
    });
};
