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

// Check authentication status
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User not authenticated, redirect to login
        window.location.href = 'index.html';
    }
});

// Logout function
function logout() {
    firebase.auth().signOut()
        .then(() => {
        console.log('Logout Successful');
        window.location.href = 'index.html'; // Redirect to login page
        })
        .catch((error) => {
        console.error('Logout Failed:', error.message);
        });
}