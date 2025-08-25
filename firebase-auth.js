// firebase-auth.js — Autenticação com Firebase (Google Login)

// 1. Importa módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// 2. Configuração do projeto Firebase
const firebaseConfig = {
  apiKey: "TUA_API_KEY",
  authDomain: "teu-projeto.firebaseapp.com",
  projectId: "teu-projeto-id",
  storageBucket: "teu-projeto.appspot.com",
  messagingSenderId: "teu-sender-id",
  appId: "teu-app-id"
};

// 3. Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 4. Função de login com popup
function loginComGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`✅ Bem-vindo, ${user.displayName}`);
      alert(`Olá ${user.displayName}! Estás autenticado com sucesso.`);
    })
    .catch((error) => {
      console.error("❌ Erro ao autenticar:", error.message);
      alert("Erro ao fazer login. Tenta novamente.");
    });
}

// 5. Exemplo de botão (pode ser adicionado ao HTML)
// <button onclick="loginComGoogle()">🔐 Login com Google</button>
