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