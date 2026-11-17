
// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Update menu icon
    menuToggle.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// ==================================
// CLOSE MENU AFTER CLICKING A LINK
// ==================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// ==================================
// ACTIVE NAVIGATION ON SCROLL
// ==================================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });
});

// ==================================
// FOOTER YEAR
// ==================================

const footerYear = document.querySelector(".footer p");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} KEERTHIKA.R | Engineering Portfolio`;
}

console.log("KEERTHIKA.R Portfolio Loaded Successfully!");
