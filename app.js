// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOsvDvK_4FEMavFAhY2U4UMTbCSCv2kzU",
    authDomain: "afif-green.firebaseapp.com",
    projectId: "afif-green",
    storageBucket: "afif-green.appspot.com",
    messagingSenderId: "332206793839",
    appId: "1:332206793839:web:f2e0279566023d20e1599a",
    measurementId: "G-XQD9TSERT6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to show notification using SweetAlert2
function showPopupNotification(message, isSuccess) {
    const icon = isSuccess ? 'success' : 'error';

    Swal.fire({
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 3000
    });
}

// Sign Up function
function signUp() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        showPopupNotification('Password and Confirm Password do not match', false);
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Sign Up Successful:', user);
            showPopupNotification('Sign Up Successful', true);

            // Change button text to "Login" and update onclick function
            const signUpButton = document.getElementById('signUpButton');
            signUpButton.innerText = 'Login';
            signUpButton.onclick = toggleForms;

            const formDescription = document.getElementById('formDescriptionsignup');
            formDescription.innerHTML = "Already have an account? <a id='toggleLink' href='#loginForm' onclick='toggleForms()'>Login!</a>";

            const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
            const confirmPassword = document.getElementById('confirmPassword');
            confirmPasswordLabel.style.display = 'none';
            confirmPassword.style.display = 'none';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            showPopupNotification(`Sign Up Failed: ${errorMessage}`, false);
        });
}

// Login function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Login Successful:', user);
            showPopupNotification('Login Successful', true);
            // Redirect to Dashboard page
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            showPopupNotification(`Login Failed: ${errorMessage}`, false);
        });
}

// Event listener for clicking on form description
// document.getElementById('formDescriptionlogin').addEventListener('click', function () {
    // toggleForms();
// });

// Toggle between Login and Sign Up forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginButton = document.getElementById('loginButton');
    const signUpButton = document.getElementById('signUpButton');
    const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    const confirmPassword = document.getElementById('confirmPassword');
    const formDescription = document.getElementById('formDescriptionsignup');

    loginForm.classList.toggle('active-form');
    signupForm.classList.toggle('active-form');

    // Change button text and onclick function
    if (loginForm.classList) {
        // signUpButton.innerText = 'Sign Up';
        signUpButton.onclick = function () {
            // updateFormDescriptionAndRedirect('Already have an account? Login!');
        };

        // Perbarui tombol login
        // loginButton.innerText = 'Login';
        loginButton.onclick = function () {
            // updateFormDescriptionAndRedirect("Don't have an account? Sign Up!");
        };        
    } else if (loginForm.classList.contains('active-form')){
        // Hide Confirm Password for Login form
        confirmPasswordLabel.style.display = 'none';
        confirmPassword.style.display = 'none';
    } else {
        signUpButton.innerText = 'Login';
        signUpButton.onclick = toggleForms;
        loginButton.innerText = 'Sign Up';
        loginButton.onclick = toggleForms;

        // Show Confirm Password for Sign Up form
        confirmPasswordLabel.style.display = 'block';
        confirmPassword.style.display = 'block';
    }
}
