const inputName = document.getElementById("inName");
const inputClg = document.getElementById("inCollege");
const inputLocation = document.getElementById("inLocation");
const image = document.getElementById("img-Display");

// Generate Div
let genName = document.getElementById("name");
let genClg = document.getElementById("college");
let genLocation = document.getElementById("location");
const generateDiv = document.getElementById("generateDiv");
const button = document.getElementById("generatecard");

function generateId() {
  console.log("click");
  generateDiv.classList.remove('Container-hide');
  generateDiv.classList.add('Container.show');
  genName.innerHTML = inputName.value;
  genClg.innerHTML = inputClg.value;
  genLocation.innerHTML = inputLocation.value;
}
function loadImage(event){
    image.src = URL.createObjectURL(event.target.files[0]);
}
button.addEventListener("click", generateId);