// JavaScript for Startup Animation
document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById('splash-screen');

    // Fade out splash screen after 2 seconds
    setTimeout(() => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500); // Matches CSS transition duration for smooth fade
    }, 2000);
});
