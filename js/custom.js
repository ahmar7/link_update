let toggleMenu = () => {
  let navMenu = document.getElementById("menu-nav");
  let navBtn = document.getElementById("menuBtn");
  navBtn.classList.toggle("active-btn");
  navMenu.classList.toggle("showing-menu");
};

window.onload = function () {
  setTimeout(function () {
    var myAudio = document.getElementById("audioID").play();
    console.log(myAudio);
    console.log("wod");
  }, 3000);
};

let muteAudio = () => {
  document.getElementById("audioID").muted = true;
};
let UnmuteAudio = () => {
  document.getElementById("audioID").muted = false;
};
