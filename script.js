document.getElementById('clubForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Хуудас дахин ачааллахаас сэргийлнэ
    
    const name = document.getElementById('userName').value;
    const club = document.getElementById('userClub').options[document.getElementById('userClub').selectedIndex].text;
    
    // Энд түр зуур alert ашиглая, дараа нь гоё цонх болгож болно
    alert(Баяр хүргэе, ${name}! Та ${club}-т амжилттай бүртгүүлэх хүсэлт илгээлээ.);
    
    this.reset(); // Формыг цэвэрлэх
});