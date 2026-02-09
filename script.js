// ... (Таны FirebaseConfig хэсэг хэвээрээ байна)

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
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        // Firebase Firestore-д хадгалах
        await db.collection("registrations").add(userData);
        
        // АНХААР: URL-д backticks (`) ашиглах ёстой
        window.location.href = `${club}.html`; 
        
    } catch (error) {
        console.error("Алдаа гарлаа: ", error);
        alert("Бүртгэл амжилтгүй боллоо!");
    }
}

// 4. Формтой холбох
const form = document.getElementById('clubForm');
if (form) {
    form.addEventListener('submit', registerUser);
}