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
