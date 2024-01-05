// What is the output of the following code?

// HTML
<div id="container">
  <p class="item">Item 1</p>
  <p class="item">Item 2</p>
  <p class="item">Item 3</p>
</div>;

// JavaScript
const container = document.getElementById("container");
const items = document.querySelectorAll(".item");
const firstItem = document.querySelector(".item");

container.style.backgroundColor = "lightblue";
items.forEach((item) => (item.style.color = "white"));
firstItem.style.fontSize = "30px";

console.log(container.getAttribute("id")); // ? container
console.log(items.length); // ?  3
console.log(firstItem.textContent); // ? item 1
