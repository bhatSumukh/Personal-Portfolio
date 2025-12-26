const texts = ["Front-End Developer", "UI/UX Designer", "Web Developer"];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Typing
    typingText.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1200);
    }
  } else {
    // Deleting
    typingText.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

typeLoop();
