document.getElementById("careButton").addEventListener("click", care);
document.getElementById("manipulateButton").addEventListener("click", manipulate);

let health = 50;

function care() {
  health += 10;
  updateGame();
}

function manipulate() {
  const manipulationEffect = Math.random() > 0.5 ? 10 : -10;
  health += manipulationEffect;
  updateGame();
}

function updateGame() {
  document.getElementById("plant").src = getPlantImage();
  document.getElementById("health-meter").innerText = `Health: ${health}`;
  
  if (health >= 70) {
    showNotification(notificationDiv, "Your plant is thriving! Keep up the good balance.");
  } else if (health <= 30) {
    showNotification(notificationDiv, "Uh-oh! Your plant needs more care. Find the right balance.");
  }
}

function showNotification(notificationDiv, message) {
  // Create a new notification div
  const newNotification = document.createElement("div");
  newNotification.classList.add("notification");
  newNotification.innerText = message;

  // Append the new notification to the existing notification div
  notificationDiv.innerHTML = "";
  notificationDiv.appendChild(newNotification);

  // Set a timeout to remove the notification after a few seconds
  setTimeout(() => {
    notificationDiv.innerHTML = "";
  }, 3000); // 3000 milliseconds (3 seconds) - adjust as needed
}

function getPlantImage() {
  if (health >= 90) {
    return "grow-4.png";
  } else if (health <= 30) {
    return "grow-2.png";
  } else {
    return "grow-3.png";
  }
}