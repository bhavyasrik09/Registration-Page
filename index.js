document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
    
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (!phone.match(/^\d+$/)) {
        document.getElementById('phone-error').textContent = 'Phone number must contain only digits';
        isValid = false;
    }

    
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});
