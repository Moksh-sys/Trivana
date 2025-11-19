// Trivanabuyer.js – FIXED VERSION

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ===================== */
  /* 🔎 Search bar logic   */
  /* ===================== */
  const searchButton = document.querySelector(".search-btn");

function runSearch() {
  const filter = searchBar.value.toLowerCase();
  const products = document.querySelectorAll(".pr, .product-card, .productcard");

  products.forEach((item) => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}

if (searchBar) {
  searchBar.addEventListener("keyup", runSearch);
}

if (searchButton && searchBar) {
  searchButton.addEventListener("click", runSearch);
}


  /* ============================= */
  /* ✨ Scroll-in animations       */
  /* ============================= */
  try {
    const scrollElements = document.querySelectorAll(
      ".artistcard, .productcard, .about-container"
    );

    if ("IntersectionObserver" in window && scrollElements.length > 0) {
      const observerOptions = { threshold: 0.2 };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all 0.8s ease-out";
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      scrollElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);
      });
    } else {
      // Fallback: show them without animation
      scrollElements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }
  } catch (err) {
    console.error("Scroll animation error:", err);
  }

  /* ===================== */
  /* 🎨 Hover effects      */
  /* ===================== */

  // Artist cards
  try {
    const artistCards = document.querySelectorAll(".artistcard");
    artistCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        this.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
      });
      card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
      });
    });
  } catch (err) {
    console.error("Artist cards hover error:", err);
  }

  // Product cards
  try {
    const productCards = document.querySelectorAll(".productcard, .product-card");
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
        this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        this.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
      });
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });
    });
  } catch (err) {
    console.error("Product cards hover error:", err);
  }

  // Nav links hover
  try {
    const navLinks = document.querySelectorAll(".mid a, .right a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.color = "#e05e41";
        this.style.transition = "color 0.3s ease";
      });
      link.addEventListener("mouseleave", function () {
        this.style.color = "";
      });
    });
  } catch (err) {
    console.error("Nav links hover error:", err);
  }

  /* ========================= */
  /* 🤖 Trivana Chatbot Logic  */
  /* ========================= */

  const launcher = document.getElementById("chatbotLauncher");
  const widget = document.getElementById("chatbotWidget");
  const closeBtn = document.getElementById("chatbotClose");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const messages = document.getElementById("chatbotMessages");

  function appendMessage(text, sender = "bot") {
    if (!messages) return;
    const div = document.createElement("div");
    div.classList.add("chatbot-message");
    div.classList.add(sender === "user" ? "user" : "bot");
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("pottery") || msg.includes("potterys")) {
      return "You can explore pottery items in the Marketplace section under the 'Potterys' category.";
    }
    if (msg.includes("painting") || msg.includes("art")) {
      return "Our paintings are available in the Marketplace → Paintings section.";
    }
    if (msg.includes("leather")) {
      return "Handcrafted leather work is listed in the 'Leather Work' category.";
    }
    if (msg.includes("jewellery") || msg.includes("jewelry")) {
      return "Tribal jewellery is available under the 'Jewellery' section in the Marketplace.";
    }
    if (msg.includes("contact") || msg.includes("help") || msg.includes("support")) {
      return "You can contact us at ✉️ info@trivanaarts.com or 📞 +91 63548 21857.";
    }
    if (msg.includes("where") && (msg.includes("located") || msg.includes("address"))) {
      return "Trivana Arts & Crafts is based in Ahmedabad, Gujarat, India. 🇮🇳";
    }
    if (msg.includes("shipping") || msg.includes("delivery")) {
      return "Shipping details may vary by product. Please check the product page or contact us for specific delivery info.";
    }
    if (msg.includes("artisan") || msg.includes("artist") || msg.includes("tribal")) {
      return "Trivana collaborates with tribal artisans to preserve traditional crafts and bring authentic handmade products to you.";
    }
    if (msg.includes("about")) {
      return "Trivana is a platform celebrating tribal arts & crafts, connecting skilled artisans with the world.";
    }

    return "Thank you for your question! You can explore categories in the Marketplace or reach us via email for more details. 😊";
  }

  function handleSend() {
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";

    setTimeout(() => {
      const reply = getBotReply(text);
      appendMessage(reply, "bot");
    }, 300);
  }

  // Open chatbot
  if (launcher && widget) {
    launcher.addEventListener("click", () => {
      widget.classList.add("open"); // CSS: .chatbot-widget.open { display:flex; }
      launcher.style.display = "none";
      if (input) input.focus();
    });
  }

  // Close chatbot
  if (closeBtn && widget && launcher) {
    closeBtn.addEventListener("click", () => {
      widget.classList.remove("open");
      launcher.style.display = "flex";
    });
  }

  // Handle form submit (send message)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSend();
    });
  }

  // Optional: send on Enter key
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }
});


