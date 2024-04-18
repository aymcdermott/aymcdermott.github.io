function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');   
}

function buttonvariableClicked() {
    toggleTheme();
}

document.getElementById("toggleButton").onclick = buttonvariableClicked;
