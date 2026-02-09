<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>

    <script src="script.js"></script>
</body>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkSj1k1rEislrK0SmTrUWDDd75d2QgbLE",
  authDomain: "dalai-ebc.firebaseapp.com",
  projectId: "dalai-ebc",
  storageBucket: "dalai-ebc.firebasestorage.app",
  messagingSenderId: "872196747374",
  appId: "1:872196747374:web:6c7e2c5558e1a9eca6367f",
  measurementId: "G-8EVRYZEQYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase-ийн функцүүдийг ашиглан бүртгэл нэмэх
async function registerUser(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('userName').value,
        grade: document.getElementById('userGrade').value,
        phone: document.getElementById('userPhone').value,
        club: document.getElementById('userClub').value,
        timestamp: new Date()
    };

    try {
        // 'registrations' нэртэй цуглуулга руу өгөгдлийг илгээнэ
        await db.collection("registrations").add(userData);
        
        // Хадгалж дууссаны дараа тухайн клубийн хуудас руу шилжүүлнэ
        window.location.href = ${userData.club}.html;
    } catch (error) {
        console.error("Алдаа гарлаа: ", error);
        alert("Бүртгэл амжилтгүй боллоо, дахин оролдоно уу.");
    }
}
document.getElementById('clubForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Хуудсыг шууд шинэчлэгдэхээс хамгаална

    // Сонгосон клубийн утгыг авах (id-аар нь)
    const selectedClub = document.getElementById('userClub').value;

    if (selectedClub === "it") {
        window.location.href = "it.html";
    } else if (selectedClub === "english") {
        window.location.href = "english.html";
    } else if (selectedClub === "sports") {
        window.location.href = "sports.html";
    } else if (selectedClub === "art") {
        window.location.href = "art.html";
    } else {
        alert("Та клубээ сонгоно уу!");
    }
});
