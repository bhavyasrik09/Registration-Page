document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
    
    // Get form values
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    // Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Phone number validation
    if (!phone.match(/^\d+$/)) {
        document.getElementById('phone-error').textContent = 'Phone number must contain only digits';
        isValid = false;
    }

    // Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }

    // If form is valid, submit it (you can replace this with an actual form submission)
    if (isValid) {
        alert('Form submitted successfully!');
        // Uncomment the next line to allow form submission
        // this.submit();
    }
});
