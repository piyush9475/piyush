function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Typing effect
const textArray = ["Web Developer", "Digital Marketer", "Freelancer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[index].length) {
        document.getElementById("typing").innerHTML += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typing").innerHTML =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
