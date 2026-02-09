// 1. Зураг дээрх чиний Firebase тохиргоо
const firebaseConfig = {
    apiKey: "AIzaSyCksj1k1rEislrK0SmTrUWDDd75d2QgbLE",
    authDomain: "dalai-ebc.firebaseapp.com",
    projectId: "dalai-ebc",
    storageBucket: "dalai-ebc.firebasestorage.app",
    messagingSenderId: "872196747374",
    appId: "1:872196747374:web:6c7e2c5558e1a9eca6367f",
    measurementId: "G-8EVRYZEQYC"
};

// 2. Firebase-ийг эхлүүлэх
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3. Бүртгэлийн функц
async function registerUser(event) {
    event.preventDefault();

    // Формоос мэдээллийг авах
    const name = document.getElementById('userName').value;
    const grade = document.getElementById('userGrade').value;
    const phone = document.getElementById('userPhone').value;
    const club = document.getElementById('userClub').value;

    const userData = {
        name: name,
        grade: grade,
        phone: phone,
        club: club,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Серверийн цаг
    };

    try {
        // Firebase Firestore-д хадгалах
        await db.collection("registrations").add(userData);
        
        // Амжилттай болбол тухайн клубийн хуудас руу шилжих
        window.location.href = ${club}.html;
    } catch (error) {
        console.error("Алдаа гарлаа: ", error);
        alert("Бүртгэл амжилтгүй боллоо!");
    }
}

// 4. Формтой холбох (Формын ID "clubForm" байгаа эсэхийг шалгаарай)
const form = document.getElementById('clubForm');
if (form) {
    form.addEventListener('submit', registerUser);
}
