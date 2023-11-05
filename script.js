const errorLabel = document.querySelector('.label-error')
const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function SubmitEmail(event) {
  event.preventDefault();
  
  const email = document.getElementById('email')
  
  if (!email.value.match(validRegex)) {
    email.className = 'email-error'
    errorLabel.style.display = 'block';    
    return
  }

  window.location.href = '/newsletter-sign-up.github.io/success.html';
}

function dismiss() {
  window.location.href = '/newsletter-sign-up.github.io/';
}