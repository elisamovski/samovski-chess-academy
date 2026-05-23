const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector(".signup-form");
const formStatus = document.querySelector(".form-status");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (form && formStatus) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const endpoint = form.getAttribute("action");

    if (!endpoint || endpoint === "#") {
      event.preventDefault();
      formStatus.textContent = "This form is ready. Add your Formspree endpoint to start receiving submissions.";
      return;
    }

    formStatus.textContent = "Sending your request...";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      formStatus.textContent = "Thank you. Your signup request has been sent.";
    } catch (error) {
      formStatus.textContent = "Something went wrong. Please try again or contact the academy directly.";
    }
  });
}
