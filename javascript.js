function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("image").style.opacity = "0.5";
  document.querySelector(".image").style.opacity = "0.5";
  document.querySelector(".image1").style.opacity = "0.5";
  document.querySelector(".image2").style.opacity = "0.5";
  document.querySelector(".but").style.opacity = "0.5";
  document.querySelector(".part2").style.opacity = "0.5";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("image").style.opacity = "1";
  document.querySelector(".image").style.opacity = "1";
  document.querySelector(".image1").style.opacity = "1";
  document.querySelector(".image2").style.opacity = "1";
  document.querySelector(".but").style.opacity = "1";
  document.querySelector(".part2").style.opacity = "1";
}
