const page = document.getElementById("main-container");

const panel = document.getElementsByClassName("schedule__rooms")[0];

page.addEventListener("scroll", function() {
  console.log(page.scrollLeft);
  panel.classList.toggle("aside--float", page.scrollLeft > 200);
});
