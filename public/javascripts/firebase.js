// Import the functions you need from the SDKs you need
// https://www.npmjs.com/package/firebase 내용 중간 문단 Script include 부분에서 갈취
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Firebase API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업.

const firebaseConfig = {
  apiKey: "AIzaSyAtvScgmc2QKmjLEXm_IvcTjeohGbj207A",
  authDomain: "cloud-kosmo-chat.firebaseapp.com",
  projectId: "cloud-kosmo-chat",
  storageBucket: "cloud-kosmo-chat.firebasestorage.app",
  messagingSenderId: "316665125043",
  appId: "1:316665125043:web:8918bab4b92cb5f58f78c6"
};

// Initialize Firebase
// 변수(app) 앞에 export를 붙여서 외부(html,js)에서 사용 가능하도록 구현함.
export const app = initializeApp(firebaseConfig);