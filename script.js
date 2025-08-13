// Sidebar toggle functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.querySelector(".mobile-toggle");

  if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

// Active navigation highlighting
function updateActiveNavItem() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("active");
      }
    }
  });
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize fade-in elements
document.querySelectorAll(".fade-in").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
});

// Event listeners
window.addEventListener("scroll", () => {
  updateActiveNavItem();
  animateOnScroll();
});

window.addEventListener("load", () => {
  updateActiveNavItem();
  animateOnScroll();
});

// Typing effect for hero title
function typeWriter() {
  const text = "João Von Linde";
  const element = document.querySelector(".hero h1");
  let i = 0;

  if (element) {
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }

    setTimeout(type, 1000);
  }
}

// Initialize typing effect
document.addEventListener("DOMContentLoaded", typeWriter);

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Dynamic background particles
function createParticles() {
  const hero = document.querySelector(".hero");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: var(--accent);
                    border-radius: 50%;
                    opacity: ${Math.random() * 0.5 + 0.2};
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: float ${
                      Math.random() * 3 + 2
                    }s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                `;

    if (hero) {
      hero.appendChild(particle);
    }
  }
}

// Initialize particles
document.addEventListener("DOMContentLoaded", createParticles);
