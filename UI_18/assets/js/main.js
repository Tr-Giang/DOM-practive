function handleDrag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function handleOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}
