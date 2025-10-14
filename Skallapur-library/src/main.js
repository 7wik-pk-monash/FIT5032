// import './assets/main.css'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOS-yJ-3KAOUY645JrnP26RP9-U8gz014",
  authDomain: "week7-sathwik.firebaseapp.com",
  projectId: "week7-sathwik",
  storageBucket: "week7-sathwik.firebasestorage.app",
  messagingSenderId: "561994516651",
  appId: "1:561994516651:web:fa217461d6b385180d0fee"
};

const app = createApp(App);

initializeApp(firebaseConfig);

app.use(PrimeVue, {
  theme: Aura,
})

app.use(router)

app.mount('#app')
