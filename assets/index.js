function openMenu() {
  document.getElementById("sideMenu").style.top = "0px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.top = "-400px";
};


document.addEventListener("DOMContentLoaded", function () {
          var typed = new Typed(".typing", {
          strings: ["Fontend developer","graphic designer"],
          typeSpeed: 50,      // Speed of typing
          backSpeed: 25,      // Speed of backspacing
          backDelay: 1000,    // Delay before backspacing
          loop: true          // Repeat animation
        });
      });

document.addEventListener("DOMContentLoaded", function () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      }, {
        threshold: 0.2
      });

      document.querySelectorAll(".hidden").forEach((el) => {
        observer.observe(el);
      });
    });


    
        
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
    e.preventDefault();
  }
  if (e.key === "F12") {
    e.preventDefault();
  }
});


function checkScreenSize() {
  if (window.innerWidth <= 768) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

// Run on load
checkScreenSize();

// Run when screen resizes
window.addEventListener("resize", checkScreenSize);