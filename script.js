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