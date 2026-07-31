
// script.js

// Simple animation pour le chargement des sections (optionnel)
document.addEventListener('DOMContentLoaded', () => {
 const sections = document.querySelectorAll('section');

 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 } else {
 entry.target.classList.remove('visible'); // Optionnel: pour ré-animer si sort de la vue
 }
 });
 }, { threshold: 0.1 }); // Déclenche quand 10% de la section est visible

 sections.forEach(section => {
 // Ajouter une classe initiale pour le style quand non visible
 section.classList.add('hidden');
 observer.observe(section);
 });
});

// Ajouter une classe 'visible' pour l'animation CSS
// Cela peut être fait dans le CSS en utilisant :
// .hidden { opacity: 0; transform: translateY(20px); }
// .visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }

// Animation pour les barres de compétences (exemple)
document.addEventListener('DOMContentLoaded', () => {
 const progressBars = document.querySelectorAll('.progress-bar');

 const observerSkills = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 const bar = entry.target;
 const width = bar.style.width;
 bar.style.width = '0'; // Remettre à 0 pour l'animation
                // Forcer un re-paint pour que l'animation démarre
 bar.offsetHeight; 
 bar.style.width = width;
 observerSkills.unobserve(bar); // Observer une seule fois
 }
 });
 }, { threshold: 0.5 }); // Déclencher quand 50% de la barre est visible

 progressBars.forEach(bar => {
 observerSkills.observe(bar);
 });
});

// Pour un menu collant (sticky header)
window.addEventListener('scroll', () => {
 const header = document.querySelector('header');
 if (window.scrollY > 50) { // Si on a défilé de plus de 50px
 header.classList.add('scrolled');
 } else {
 header.classList.remove('scrolled');
 }
});