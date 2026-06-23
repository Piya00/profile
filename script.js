const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(
        ".skill-card,.project-card"
    );

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.2
});

document
.querySelectorAll(".skill-card,.project-card,.profile-card")
.forEach(el=>{
    observer.observe(el);
});