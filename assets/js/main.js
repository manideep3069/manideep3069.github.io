// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add scroll event listener for navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
  } else {
    navbar.style.backgroundColor = "#2c3e50";
  }
});
// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Add your form submission logic here
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});
