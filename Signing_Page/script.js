// Image paths
const images = {
    login: 'https://res.cloudinary.com/derjw5vy6/image/upload/v1775376947/sign-in_m0el9q.jpg',    
    signup: 'https://res.cloudinary.com/derjw5vy6/image/upload/v1775377813/sign-up_uivkql.jpg' 
};

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const sideImage = document.getElementById('sideImage');

// Set initial image (login image)
sideImage.src = images.login;

// Function to show Login form
function showLogin() {
    // Hide signup form
    signupForm.classList.remove('active');
    
    // Show login form after a small delay
    setTimeout(() => {
        loginForm.classList.add('active');
    }, 100);
    
    // Change side image to login image
    sideImage.style.opacity = '0';
    setTimeout(() => {
        sideImage.src = images.login;
        sideImage.style.opacity = '1';
    }, 300);
}

// Function to show Signup form
function showSignup() {
    // Hide login form
    loginForm.classList.remove('active');
    
    // Show signup form after a small delay
    setTimeout(() => {
        signupForm.classList.add('active');
    }, 100);
    
    // Change side image to signup image
    sideImage.style.opacity = '0';
    setTimeout(() => {
        sideImage.src = images.signup;
        sideImage.style.opacity = '1';
    }, 300);
}

// Function to toggle password visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const button = passwordInput.nextElementSibling;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        button.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        button.textContent = '👁️';
    }
}

// Add smooth transition to image
sideImage.style.transition = 'opacity 0.3s ease';

// Prevent form submission for demo 
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is just a demo)');
    });
});