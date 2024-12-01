const draggableContainer = document.getElementById("draggableElements");
const cardImage = document.getElementById("card-image");
const downloadBtn = document.getElementById("downloadBtn");

function handleField(event, fieldId) {
  event.preventDefault();
  const inputElement = document.getElementById(fieldId);
  const value = inputElement.value.trim();

  if (value !== "") {
    createDraggableText(value);
    inputElement.parentElement.remove();
  }
}

function createDraggableText(text) {
  const draggableDiv = document.createElement("div");
  draggableDiv.className = "draggable";
  draggableDiv.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "×";
  removeBtn.onclick = () => draggableDiv.remove();
  draggableDiv.appendChild(removeBtn);

  draggableDiv.style.fontSize = "20px";
  draggableDiv.style.fontFamily = "'Arial', sans-serif";
  draggableDiv.style.color = "black";
  draggableDiv.style.padding = "5px";

  draggableDiv.setAttribute("draggable", "true");

  draggableDiv.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", text);

    const dragPreview = document.createElement("div");
    dragPreview.style.position = "absolute";
    dragPreview.style.pointerEvents = "none";
    dragPreview.style.fontSize = "30px";
    dragPreview.style.fontFamily = "'Arial', sans-serif";
    dragPreview.style.color = "black";
    dragPreview.style.padding = "5px";
    dragPreview.style.background = "rgba(255, 255, 255, 0.8)";
    dragPreview.style.border = "1px solid black";
    dragPreview.textContent = text;
    document.body.appendChild(dragPreview);

    e.dataTransfer.setDragImage(dragPreview, 10, 10);

    draggableDiv.addEventListener("dragend", () => {
      dragPreview.remove();
    });
  });

  draggableContainer.appendChild(draggableDiv);
}

cardImage.addEventListener("dragover", (e) => e.preventDefault());
cardImage.addEventListener("drop", (e) => {
  e.preventDefault();
  const text = e.dataTransfer.getData("text/plain");

  const droppedElement = document.createElement("p");
  droppedElement.textContent = text;

  droppedElement.style.position = "absolute";
  droppedElement.style.left = `${e.offsetX}px`;
  droppedElement.style.top = `${e.offsetY}px`;
  droppedElement.style.fontSize = "20px";
  droppedElement.style.fontFamily = "'Arial', sans-serif";
  droppedElement.style.color = "#9b411a";

  cardImage.parentElement.appendChild(droppedElement);
});

downloadBtn.addEventListener("click", () => {
  html2canvas(cardImage.parentElement).then((canvas) => {
    const link = document.createElement("a");
    link.download = "wedding-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
let val = 1;
function change() {
  if (val == 1) {
    document.body.style.backgroundColor = "pink";

    val = 2;
  } else {
    document.body.style.backgroundColor = "#fdf5e6";

    val = 1;
  }
}
let scaleFactor = 1;

function increaseSiteSize() {
  scaleFactor += 0.1;
  const siteContent = document.querySelector(".img-container");
  if (siteContent) {
    siteContent.style.transform = `scale(${scaleFactor})`;
    siteContent.style.transformOrigin = "top left";
  }
}
