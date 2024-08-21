document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".navbar .list-items a");
  
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Get the target section id
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Scroll smoothly to the target section
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  