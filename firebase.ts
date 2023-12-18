// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCeFA2EdxE383LhDWSqjA8TebRCCCkZj8c",
    authDomain: "memorycard-81b21.firebaseapp.com",
    projectId: "memorycard-81b21",
    storageBucket: "memorycard-81b21.appspot.com",
    messagingSenderId: "985861128759",
    appId: "1:985861128759:web:174bf035d092ad68b675b2",
    measurementId: "G-5BQBRDYLVK"
}; 
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;