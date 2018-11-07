document.addEventListener('DOMContentLoaded', function () {
  var addBoxBtn = document.getElementById('add-box');
  addBoxBtn.addEventListener('click', addBox);

  var deleteAllBoxesBtn = document.getElementById('delete-all-boxes');
  deleteAllBoxesBtn.addEventListener('click', deleteAllBoxes);
});

function addBox() {
  var box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = randomRGB();

  var boxContainer = document.getElementById('box-container');
  boxContainer.appendChild(box);
}

function deleteAllBoxes() {
  var boxContainer = document.getElementById('box-container');
  boxContainer.innerHTML = '';
}

function randomRGB() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.random();

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}