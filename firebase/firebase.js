import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCEVS7lkZKoA7FKaF1LqCUXluLxZJmrtJc",
    authDomain: "fir-chat-app-dd8ad.firebaseapp.com",
    projectId: "fir-chat-app-dd8ad",
    storageBucket: "fir-chat-app-dd8ad.appspot.com",
    messagingSenderId: "341537357278",
    appId: "1:341537357278:web:8cae82c6d340897346714f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);