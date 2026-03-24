// Smooth scroll
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Typing animation
const textArray = ["Web Developer", "Digital Marketer", "Freelancer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return; // 🔥 prevents error

    if (charIndex < textArray[index].length) {
        typingElement.innerHTML += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.innerHTML = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

// GitHub button
function openGithub() {
    window.open("https://github.com/piyush9475", "_blank");
}

// Start typing when page loads
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
