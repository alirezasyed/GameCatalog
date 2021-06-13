let apercu = document.getElementsByClassName("apercu");

for (var i = 0; i < apercu.length; i++) {
  apercu[i].onclick = affichageSlide;
}

// document.getElementById("photo").setAttribute("src", apercu[0].getAttribute("src"));

function affichageSlide() {
  document
    .getElementById("photo")
    .setAttribute("src", this.getAttribute("src"));
}

// ===================Sidebar Menu===================
// debugger;

const toggleButton = document.getElementById("toggle-button");

const sideBar = document.getElementById('sidebar');


toggleButton.addEventListener("click", show);

function show() {
  sideBar.classList.toggle('active');
}

