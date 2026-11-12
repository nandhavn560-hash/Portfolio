const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Please fill all fields.");
  }
});