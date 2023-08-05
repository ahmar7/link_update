let toggleMenu = () => {
  let navMenu = document.getElementById("menu-nav");
  let navBtn = document.getElementById("menuBtn");
  navBtn.classList.toggle("active-btn");
  navMenu.classList.toggle("showing-menu");
};

