document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Handle form submission logic here (e.g., send to backend)
  alert("Thank you! Your message has been sent.");
  // Optionally, clear the form
  event.target.reset();
});
