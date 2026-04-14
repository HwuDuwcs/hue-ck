let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
}

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);


const textEl = document.getElementById("ledProText");
const content = textEl.innerText;

textEl.innerHTML = "";

content.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.innerText = char;
    span.style.animationDelay = (index * 0.08) + "s";
    textEl.appendChild(span);
});

setInterval(() => {
    let spans = document.querySelectorAll(".led-pro span");

    spans.forEach(span => {
        if (Math.random() < 0.1) {
            span.classList.add("flicker");
            setTimeout(() => {
                span.classList.remove("flicker");
            }, 200);
        }
    });
}, 300);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});



