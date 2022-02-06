// Variables
let menuBtn = document.querySelector("#menuBtn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".searchBtn");
let searchInput = document.querySelector("#searchInput");
let mainBody = document.querySelector(".main");
let footerBody = document.querySelector("#footer");

menuBtn.onclick = function () {
  sidebar.classList.toggle("active");
  mainBody.classList.toggle("active");
  footerBody.classList.toggle("active");
};

searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
  mainBody.classList.toggle("active");
  footerBody.classList.toggle("active");
};
