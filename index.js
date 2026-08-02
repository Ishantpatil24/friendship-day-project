// Friendship Day Website JavaScript ❤️

// Welcome message animation
const title = document.querySelector("h1");

if (title) {
    let text = title.innerText;
    title.innerText = "";

    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();
}


// Create floating hearts ❤️
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


// Surprise button
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {

        alert("Thank you for being my amazing friend ❤️✨");

    });
}


// Scroll animation
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {

    boxes.forEach(box => {

        let position = box.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }

    });

});


// Background music control (if audio exists)
const music = document.querySelector("audio");

if(music){
    document.body.addEventListener("click", () => {
        music.play();
    }, {once:true});
}