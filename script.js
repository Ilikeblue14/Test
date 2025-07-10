let currentTurn = 'X';

function handleCellClick(cellId) {
  const img = document.getElementById(cellId);
  if (img.src.includes("SquareBlank.png")) {
    img.src = currentTurn === 'X' ? "pics/SquareX.png" : "pics/SquareO.png";
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
  }
}

const ImageIds = [
  "left1", "left2", "left3",
  "center1", "center2", "center3",
  "right1", "right2", "right3"
];

ImageIds.forEach(id => {
  document.getElementById(id).addEventListener("click", () => handleCellClick(id));
});

// Object to store the original image sources
const originalImageSources = {};

// Capture the original image sources after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#projects img");
  images.forEach((img) => {
    originalImageSources[img.id] = img.src;
  });
});

// Function to reset the game board images
function resetGame() {
  const images = document.querySelectorAll("#projects img");
  images.forEach((img) => {
    if (originalImageSources[img.id]) {
      img.src = originalImageSources[img.id];
    }
  });
}

