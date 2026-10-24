      const contactForm = document.getElementById("contactForm");
        const formMessage = document.getElementById("formMessage");

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.classList.add("show");
                return;
            }

            formMessage.textContent =
                "Thank you, " + name +
                "! Your message has been checked, but it has not been sent. " +
                "Connect this form to an email service or backend to deliver messages.";

            formMessage.classList.add("show");
            contactForm.reset();
        });