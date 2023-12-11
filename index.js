

const petPixel = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const data = petPixel.map((num, index) => {
  const x = index % 14;
  const y = Number.parseInt(index / 14);
  const color = num === 1 ? "#000" : "transparent";
  // const char = num === 1 ? "#" : " ";
  // const control = index % 14 === 0 ? "\n" : "";
  return `${x * 4}px ${y * 4}px 0 ${color}`;
}).join(",");

console.log(data);

// script.js

const icons = [
  { name: "food item", subpage: "1-introduction.html" },
  { name: "light item", subpage: "2-design.html" },
  // { name: "game item", subpage: "3-reflection.html" },
  { name: "medkit item", subpage: "3-reflection.html" },
  { name: "bath item", subpage: "4-theory.html" },
  { name: "weight item", subpage: "6-game.html" },
  { name: "angry item", subpage: "7-gradproj.html" },
  { name: "attention item", subpage: "8-conclusion.html" },
];

let currentIndex = localStorage.getItem("selectedIndex") || 0; 
const iconElements = document.querySelectorAll('.item');

const leftButton = document.getElementById("leftButton");
const selectButton = document.getElementById("selectButton");
const rightButton = document.getElementById("rightButton");

function updateIcons() {
  iconElements.forEach((icon, index) => {
    const distance = Math.abs(currentIndex - index);
    const opacity = 0.25 + 0.5 * (1 / (1 + distance));
    icon.style.opacity = opacity;

    // Add 'selected' class to the icon closest to the selected index
    if (distance === 0) {
      icon.classList.add('selected');
    } else {
      icon.classList.remove('selected');
    }
  });
}

let selectedIconElement = iconElements[currentIndex];

function previousIcon() {
  currentIndex = (currentIndex - 1 + icons.length) % icons.length;
  updateIcons();
}

function nextIcon() {
  currentIndex = (currentIndex + 1) % icons.length;
  updateIcons();
}

leftButton.addEventListener("click", previousIcon);

selectButton.addEventListener("click", function () {
  navigateToSubpage();
});

rightButton.addEventListener("click", nextIcon) ;

// Initial icon setup
updateIcons();

function navigateToSubpage() {
  const selectedIcon = icons[currentIndex];
  const subpageURL = selectedIcon.subpage;
  localStorage.setItem("selectedIndex", currentIndex); // Store the selected index
  window.location.href = subpageURL;
}
