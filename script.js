// Static typewriter intro (your original line)
const typeWriterText = "I'm Danah Mae I. Malabanan | 2nd Year BSIT Student";
let i = 0;
function typeWriter() {
  if (i < typeWriterText.length) {
    document.getElementById("typewriter").innerHTML += typeWriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = () => {
  typeWriter();
  startDynamicTypewriter(); // <- call the rotating title animation on load
};

// Rotating typewriter effect for job titles
const typewriterTitles = [
  "Creative Web Developer 👩‍💻",
  "UI/UX Designer 🎨",
  "Tech Dreamer 🚀"
];
let titleIndex = 0;
let charIndex = 0;
let typing = true;

function startDynamicTypewriter() {
  const typeEl = document.getElementById("typewriter-roles");

  function type() {
    if (typing) {
      if (charIndex < typewriterTitles[titleIndex].length) {
        typeEl.innerHTML += typewriterTitles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 90);
      } else {
        typing = false;
        setTimeout(type, 1800);
      }
    } else {
      if (charIndex > 0) {
        typeEl.innerHTML = typewriterTitles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 50);
      } else {
        typing = true;
        titleIndex = (titleIndex + 1) % typewriterTitles.length;
        setTimeout(type, 500);
      }
    }
  }

  type();
}

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "scrollToTop";
document.body.appendChild(scrollBtn);
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "linear-gradient(to right, #ff4ecb, #8e2de2)";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
scrollBtn.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙";
toggleBtn.id = "themeToggle";
document.body.appendChild(toggleBtn);
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "30px";
toggleBtn.style.right = "30px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.border = "none";
toggleBtn.style.background = "#fff";
toggleBtn.style.color = "#000";
toggleBtn.style.fontSize = "20px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
toggleBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    toggleBtn.innerHTML = "☀️";
    toggleBtn.style.background = "#000";
    toggleBtn.style.color = "#fff";
  } else {
    toggleBtn.innerHTML = "🌙";
    toggleBtn.style.background = "#fff";
    toggleBtn.style.color = "#000";
  }
});

// AOS Initialization
AOS.init({
  duration: 1200,
  once: true,
});

// ⭐️ Particle background for Skills section
particlesJS("particles-js", {
  particles: {
    number: { value: 35 },
    color: { value: "#ff4ecb" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  }
});

// 🧠 Skill tabs toggle
function showTab(tabId) {
  document.querySelectorAll('.skills-content').forEach(el => el.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Re-trigger animation
  AOS.refreshHard();
}
