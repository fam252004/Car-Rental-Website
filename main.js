// Select the menu icon and navbar elements from the document
let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

// Add a click event listener to the menu icon
menu.onclick = () => {
    menu.classList.toggle('bx-x');      // Toggle the 'bx-x' class on the menu icon
    navbar.classList.toggle('active');  // Toggle the 'active' class on the navbar
}

// Add an onscroll event listener to the window
window.onscroll = () => {
    menu.classList.remove('bx-x');      // Remove the 'bx-x' class from the menu icon
    navbar.classList.remove('active');  // Remove the 'active' class from the navbar
}

// Initialize ScrollReveal with specific options
const sr = ScrollReveal({
    distance: '50px',       // Distance to move elements
    duration: 2500,         // Duration of the animation in milliseconds
    delay: 400,             // Delay before the animation starts
    reset: true,            // Reset animations when elements leave the viewport
});

// Reveal elements with specific options using ScrollReveal
sr.reveal('.text', { delay: 200, origin: 'top' });             // Reveal elements with class 'text' from the top after 200ms delay
sr.reveal('.formc form', { delay: 800, origin: 'left' });      // Reveal forms inside elements with class 'formc' from the left after 800ms delay
sr.reveal('.heading', { delay: 200, origin: 'top' });          // Reveal elements with class 'heading' from the top after 200ms delay
sr.reveal('.drivec .box', { delay: 600, origin: 'top' });       // Reveal boxes inside elements with class 'ridec' from the top after 600ms delay
sr.reveal('.servicess .box', { delay: 600, origin: 'top' });   // Reveal boxes inside elements with class 'servicesc' from the top after 600ms delay
sr.reveal('.aboutc', { delay: 600, origin: 'top' });           // Reveal elements with class 'aboutc' from the top after 600ms delay
sr.reveal('.reviewsc', { delay: 600, origin: 'top' });         // Reveal elements with class 'reviewsc' from the top after 600ms delay
sr.reveal('.news .box', { delay: 400, origin: 'bottom' });     // Reveal boxes inside elements with class 'news' from the bottom after 400ms delay
