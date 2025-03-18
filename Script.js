// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for role
    const roles = ["Web Developer", "UI/UX Designer", "Freelancer"]
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typeDelay = 100
  
    function typeEffect() {
      const currentRole = roles[roleIndex]
      const roleElement = document.getElementById("role")
  
      if (isDeleting) {
        // Remove a character
        roleElement.textContent = currentRole.substring(0, charIndex - 1)
        charIndex--
        typeDelay = 50
      } else {
        // Add a character
        roleElement.textContent = currentRole.substring(0, charIndex + 1)
        charIndex++
        typeDelay = 150
      }
  
      // If word is complete, start deleting after a pause
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true
        typeDelay = 1500 // Pause at the end of the word
      }
      // If deletion is complete, move to the next word
      else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        typeDelay = 500 // Pause before starting the next word
      }
  
      setTimeout(typeEffect, typeDelay)
    }
  
    // Start the typing effect
    typeEffect()
  
    // Header scroll effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Project filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectItems = document.querySelectorAll(".project-item")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectItems.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  
    // Animate skill progress bars when they come into view
    const skillItems = document.querySelectorAll(".skill-item")
  
    const animateSkills = () => {
      skillItems.forEach((item) => {
        const progressBar = item.querySelector(".progress-bar")
        const percent = progressBar.getAttribute("data-percent")
  
        const itemPosition = item.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (itemPosition < screenPosition) {
          progressBar.style.width = percent + "%"
        }
      })
    }
  
    // Run once on page load
    animateSkills()
  
    // Run on scroll
    window.addEventListener("scroll", animateSkills)
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it to the console
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show a success message (in a real application)
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset the form
        contactForm.reset()
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          })
        }
      })
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(
      ".section-header, .about-content, .skill-category, .project-item, .contact-content",
    )
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100) {
          element.classList.add("revealed")
        }
      })
    }
  
    // Add CSS for reveal animations
    const style = document.createElement("style")
    style.textContent = `
          .section-header, .about-content, .skill-category, .project-item, .contact-content {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 0.6s ease, transform 0.6s ease;
          }
          .revealed {
              opacity: 1;
              transform: translateY(0);
          }
      `
    document.head.appendChild(style)
  
    // Run once on page load
    revealOnScroll()
  
    // Run on scroll
    window.addEventListener("scroll", revealOnScroll)
  })
  
  