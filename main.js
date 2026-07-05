console.log("Portfolio loaded successfully");

/* =========================
   Typing Effect
========================= */
const text = "Student Developer | Building ChatApps, AI tools & game systems";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

window.addEventListener("load", typeEffect);


/* =========================
   Scroll Reveal
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});


/* =========================
   PROJECT DATA (WITH LOCAL IMAGES)
========================= */
const projects = {
    chatapp: {
        title: "ChatApp V1",

        desc: "Real-time chat application with authentication and live messaging.",

        readme: `
## 💬 ChatApp V1

Real-time chat system built using Firebase.

### ✨ Features
- Live messaging
- Authentication system
- Fast updates

### 🛠 Tech Stack
- HTML, CSS, JS
- Firebase
        `,

        images: [
            "assets/img/chatapp1.png.png"
        ],

        github: "https://github.com/harshittpanday/ChatAPP",
        live: "https://cha1app.netlify.app/"
    },

    blockcraft: {
        title: "BlockCraft",

        desc: "Minecraft-style sandbox game prototype.",

        readme: `
## ⛏ BlockCraft

Sandbox building game inspired by Minecraft.

### ✨ Features
- Block placement system
- Prototype terrain system
- Game mechanics testing

### 🛠 Tech Stack
- JavaScript
- Canvas / Web rendering
        `,

        images: [
            "assets/img/blockcraft1.png.png"
        ],

        github: "https://github.com/harshittpanday/BlockCraft",
        live: "https://harshittpanday.github.io/BlockCraft/"
    },

    studyai: {
        title: "Study AI",

        desc: "AI-powered study assistant for students.",

        readme: `
## 📚 Study AI

AI assistant designed for students.

### ✨ Features
- Smart answers
- Study support tools
- Simple UI

### 🛠 Tech Stack
- JavaScript
- AI integration
        `,

        images: [
            "assets/img/StudyAI1.png.png"
        ],

        github: "https://github.com/harshittpanday/study-ai",
        live: "https://harshittpanday.github.io/study-ai/"
    }
};


/* =========================
   OPEN PROJECT MODAL
========================= */
function openProject(id) {
    const p = projects[id];

    document.getElementById("modal-title").innerText = p.title;

    // README + description
    document.getElementById("modal-desc").innerText = p.readme + "\n\n" + p.desc;

    // Images
    const imgDiv = document.getElementById("modal-images");
    imgDiv.innerHTML = "";

    p.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        imgDiv.appendChild(image);
    });

    // Links
    document.getElementById("modal-github").href = p.github;
    document.getElementById("modal-live").href = p.live;

    document.getElementById("modal").style.display = "block";
}


/* =========================
   CLOSE MODAL
========================= */
function closeProject() {
    document.getElementById("modal").style.display = "none";
}