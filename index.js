let links = document.querySelector(".links");

function showMenu() {
    links.style.right = "0px";
}

function hideMenu() {
    links.style.right = "-200px";
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".links a:nth-child(1)").addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("home");
});
document.querySelector(".links a:nth-child(2)").addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("about");
});
document.querySelector(".links a:nth-child(3)").addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("gallery");
});
document.querySelector(".Background button").addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("about");
});
