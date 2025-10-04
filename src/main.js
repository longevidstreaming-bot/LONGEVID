// Importa Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOO7Lk9yrQ9jN5j2o52fmH9K8YqW6xMOo",
  authDomain: "longevid-8e7a4.firebaseapp.com",
  projectId: "longevid-8e7a4",
  storageBucket: "longevid-8e7a4.firebasestorage.app",
  messagingSenderId: "711469057",
  appId: "1:711469057:web:10f9b53ed176704f143800"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Pega elementos da UI
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const userEl = document.getElementById("user");

// Evento de login
loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Logado:", user);
  } catch (error) {
    console.error("Erro no login:", error);
  }
});

// Evento de logout
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado");
  } catch (error) {
    console.error("Erro no logout:", error);
  }
});

// Observa mudanças de login
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEl.textContent = `Bem-vindo, ${user.displayName}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    userEl.textContent = "Não logado";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});
