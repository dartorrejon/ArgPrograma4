window.addEventListener("scroll", function() {
    var menu = document.querySelector("nav");
    if (window.pageYOffset > 100 && window.innerWidth <=576) {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.left = "0";
      menu.style.opacity = 0.5;
      menu.style.zIndex = 1000;
      menu.classList.add('is-fixed');
    menu.classList.remove('is-relative');
      
    } else {
      menu.style.position = "relative";
      menu.style.top = "auto";
      menu.classList.add('is-relative');
    menu.classList.remove('is-fixed');
    }
  });
  