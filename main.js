// getElementByID, getElementsByClassName, getElementsByTagName,querySelector, querySelectorAll

const mobileNavElement = document.querySelector(".navigation-mobile");
const openNavBtn = document.querySelector(".open-menu-btn");
const closeNavBtn = document.querySelector(".close-menu-btn");

// mobileNavElement.style.display = "none";

// event listeners

openNavBtn.addEventListener("click", function () {
  console.log("open nav btn clicked!!!!!");
  //   mobileNavElement.style.display = "flex";
  mobileNavElement.classList.add("show");
});
closeNavBtn.addEventListener("click", function () {
  console.log("close nav btn clicked!!!!!");
  //   mobileNavElement.style.display = "none";
  mobileNavElement.classList.remove("show");
});
