document.addEventListener("DOMContentLoaded", () => {
    const NavBtnToggle = document.getElementById("nav-btn-toggle");
    const NavMobile = document.getElementById("nav-mobile");
  
    NavBtnToggle.addEventListener("click", () => {
      NavMobile.classList.toggle("open");
    });
});



document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
  
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        telefone: formData.get('telefone'),
        message: formData.get('message')
    };
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxP1aYUlpJHs38iiBYMg-VGqNh5HOgJ8rWKHmi_--4qnk7g4v7iKj_XcRSJM-ohukKo/exec'; // Replace with your Web App URL
  
    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(data),
    })
    .then(response => response.text()) // Wait for the fetch to complete
    .then(result => {
        console.log('Success:', result);
        // Display a success message
        alert('Your message has been sent successfully!');
        // Optionally, clear the form fields
        this.reset();
        setTimeout(() => {
            window.location.href = 'C:/web_development/uiux/success.html'; 
        }, 2000); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Your message has been sent successfully!');
        this.reset();
        // location.reload();
    });
  });
  

