// Este é um exemplo básico. Requer configuração real no Firebase Console.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Bem-vindo, " + result.user.displayName);
    });
}
