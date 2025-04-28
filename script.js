// Scroll To Top button (already given)
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 📨 Newsletter Form Submit Handler
const newsletterForm = document.querySelector('#newsletter form');

newsletterForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Stop default form submission

    const emailInput = newsletterForm.querySelector('input[type="email"]').value;

    try {
        const response = await fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailInput })
        });
    


        
        const result = await response.json();
        alert(result.message); // Show thank you message
        newsletterForm.reset(); // Clear input box
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
});
