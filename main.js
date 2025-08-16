allowed = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log("Loaded");
    let clicked = false;
    let lol; // Declare lol variable to store interval ID
    
    const notifsElement = document.querySelector('.notifs');
    const bloverlay = document.getElementById('bloverlay');
    
    if (notifsElement && bloverlay) {
        notifsElement.addEventListener('click', function() {
            console.log("hi3");
            this.classList.toggle('active');
            
            if(clicked) {
                // Clear any existing interval first
                

                    bloverlay.classList.toggle('see');
                    console.log("hi2");

                clicked = !clicked;
            } else {
                // Stop the interval when clicked is false
                clearInterval(lol);
                bloverlay.classList.toggle('see');
            }
            
            clicked = !clicked;
        });
    } else {
        console.log("Element not found");
    }
});


class TwoImageCarousel {
    constructor() {
      this.slides = document.querySelectorAll(".slide");
      this.dots = document.querySelectorAll(".dot");
      this.currentSlide = 0;
      this.autoInterval = null;

      this.init();
    }

    init() {
      this.setupDotNavigation();
      this.startAutoPlay();
      this.setupHoverPause();
    }

    showSlide(index) {
      // Remove active class from all
      this.slides.forEach((slide) => slide.classList.remove("active"));
      this.dots.forEach((dot) => dot.classList.remove("active"));

      // Add active class to current
      this.slides[index].classList.add("active");
      this.dots[index].classList.add("active");

      // Change text based on slide
      const spotlight = document.querySelector(".spotlight-info");
      if (spotlight) {
        const h1 = spotlight.querySelector("h1");
        const p = spotlight.querySelector("p");
        // Remove previous animation class
        h1.classList.remove("fade-text");
        p.classList.remove("fade-text");
        // Change text
        if (index === 0) {
          h1.textContent = "Goat Simulator 3";
          p.innerHTML =
            "Pilgore is back! Gather your herd and head to Goat Simulator 3,<br> a new realistic multiplayer sandbox farming experience.";
        } else if (index === 1) {
          h1.textContent = "Minecraft";
          p.innerHTML =
            "Build, explore, and survive in the blocky world of Minecraft.<br> Endless possibilities await!";
        }
        // Force reflow and add animation class
        void h1.offsetWidth;
        void p.offsetWidth;
        h1.classList.add("fade-text");
        p.classList.add("fade-text");
      }

      this.currentSlide = index;
    }

    nextSlide() {
      if(allowed){
      const next = this.currentSlide === 0 ? 1 : 0; // Toggle between 0 and 1
      this.showSlide(next);}
    }

    startAutoPlay() {
      this.autoInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Switch every 4 seconds
    }

    stopAutoPlay() {
      if (this.autoInterval) {
        clearInterval(this.autoInterval);
      }
    }

    setupDotNavigation() {
      this.dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          this.showSlide(index);
          this.restartAutoPlay();
        });
      });
    }

    setupHoverPause() {
      const container = document.querySelector(".carousel-container");

      container.addEventListener("mouseenter", () => {
        this.stopAutoPlay();
      });

      container.addEventListener("mouseleave", () => {
        this.restartAutoPlay();
      });
    }

    restartAutoPlay() {
      this.stopAutoPlay();
      setTimeout(() => this.startAutoPlay(), 2000); // Resume after 2 seconds
    }
  }

  // Initialize when page loads
  document.addEventListener("DOMContentLoaded", () => {
    new TwoImageCarousel();
    this.stopAutoPlay();
  });

  container.addEventListener("mouseleave", () => {
    this.restartAutoPlay();
  });

  // Initialize when page loads
  document.addEventListener("DOMContentLoaded", () => {
    new TwoImageCarousel();
  });




  clicked = false;
  const notifs = document.querySelector(".notifs");
  const bloverlay = document.querySelector(".bloverlay");
  document.querySelector(".bloverlay")?.addEventListener("click", function () {
    console.log("Keyy SVG clicked!");
    console.log("clicked:", clicked);

    if (!clicked) {
    } else {
    }
  });

  let selectedIndex = 0;
  let cards = document.querySelectorAll(".game-card");
  let canMove = true;

  function updateSelection() {
    console.log(`Selected card index: ${selectedIndex}`);
    cards.forEach((c, i) => {
      allowed = false;
      c.classList.toggle("selected", i === selectedIndex);
    });
  }

  function gameLoop() {
    const gamepads = navigator.getGamepads();

    if (gamepads[2]) {
      let gp = gamepads[2];
      console.log("Gamepad state:", gp.axes);

      if (gp.axes[0] > 0.5 && canMove) {
        console.log("→ Moving Right");
        selectedIndex = (selectedIndex + 1) % cards.length;
        updateSelection();
        canMove = false;
      }
      if (gp.axes[0] < -0.5 && canMove) {
        console.log("← Moving Left");
        selectedIndex = (selectedIndex - 1 + cards.length) % cards.length;
        updateSelection();
        canMove = false;
      }
      if (Math.abs(gp.axes[0]) < 0.2) {
        if (!canMove)
          console.log("Joystick returned to center → can move again");
        canMove = true;
      }
    }
    requestAnimationFrame(gameLoop);
  }

  window.addEventListener("gamepadconnected", (e) => {
    console.log("Controller connected:", e.gamepad.id);
    gameLoop();
  });