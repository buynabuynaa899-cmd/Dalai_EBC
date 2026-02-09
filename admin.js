import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Таны Config мэдээлэл (Өмнөхтэй ижил)
const firebaseConfig = {
    apiKey: "AIzaSyCkSj1k1rEislrK0SmTrUWDDd75d2QgbLE",
    authDomain: "dalai-ebc.firebaseapp.com",
    projectId: "dalai-ebc",
    storageBucket: "dalai-ebc.firebasestorage.app",
    messagingSenderId: "872196747374",
    appId: "1:872196747374:web:6c7e2c5558e1a9eca6367f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- НЭВТРЭХ ЛОГИК ---
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const pass = document.getElementById('adminPassword').value;

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => alert("Тавтай морил!"))
        .catch(err => alert("Алдаа: " + err.message));
});

// --- ТӨЛӨВ ХЯНАХ (Нэвтэрсэн эсэх) ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        loadData(); // Өгөгдөл татах
    } else {
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('adminContent').style.display = 'none';
    }
});

// --- ДАТА ТАТАЖ ХҮСНЭГТЭНД ХАРУУЛАХ ---
async function loadData() {
    const querySnapshot = await getDocs(collection(db, "registrations"));
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ""; // Цэвэрлэх

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        tbody.innerHTML += `
            <tr>
                <td>${data.fullName}</td>
                <td>${data.grade}</td>
                <td>${data.phone}</td>
                <td>${data.selectedClub}</td>
            </tr>
        `;
    });
}

// ГАРАХ
document.getElementById('logoutBtn').addEventListener('click', () => signOut(auth));