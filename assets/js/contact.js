document.addEventListener("DOMContentLoaded", function () {
          const contactForm = document.getElementById("contact-form");
      
          contactForm.addEventListener("submit", function (event) {
              event.preventDefault(); // Prevent form default submission
      
              const formData = new FormData(contactForm);
      
              fetch("mail.php", {
                  method: "POST",
                  body: formData
              })
              .then(response => response.text())
              .then(data => {
                  alert("Message sent successfully!");
                  contactForm.reset(); // Reset the form
              })
              .catch(error => {
                  console.error("Error:", error);
                  alert("There was an error sending the message. Please try again.");
              });
          });
      });
      