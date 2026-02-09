// 1. Firebase модулиудыг дуудах
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. Таны төслийн тохиргоо (Зураг дээрх мэдээлэл)
const firebaseConfig = {
    apiKey: "AIzaSyCkSj1k1rEislrK0SmTrUWDDd75d2QgbLE",
    authDomain: "dalai-ebc.firebaseapp.com",
    projectId: "dalai-ebc",
    storageBucket: "dalai-ebc.firebasestorage.app",
    messagingSenderId: "872196747374",
    appId: "1:872196747374:web:6c7e2c5558e1a9eca6367f"
};

// 3. Firebase-ийг холбох
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Форм дээр ажиллах JS
const clubForm = document.getElementById('clubForm');

clubForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Хуудсыг дахин ачааллахаас сэргийлнэ
    
    // Формын утгуудыг цуглуулах
    const userData = {
        fullName: document.getElementById('userName').value,
        grade: document.getElementById('userGrade').value,
        phone: document.getElementById('userPhone').value,
        selectedClub: document.getElementById('userClub').value,
        submittedAt: new Date() // Бүртгүүлсэн цаг
    };

    try {
        // 'registrations' гэдэг нэртэй collection (хүснэгт) рүү датаг илгээх
        const docRef = await addDoc(collection(db, "registrations"), userData);
        console.log("Амжилттай хадгалагдлаа. ID: ", docRef.id);
        alert("Бүртгэл амжилттай баталгаажлаа! Баярлалаа.");
        clubForm.reset(); // Формыг цэвэрлэх
    } catch (error) {
        console.error("Алдаа гарлаа: ", error);
        alert("Системийн алдаа гарлаа. Дахин оролдоно уу.");
    }
});