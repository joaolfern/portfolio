const hiddenProjects = document.querySelectorAll(".hidden");
const expandButton = document.querySelector(".project__expandBtn");
let on = false;

function showProjects(){
    hiddenProjects.forEach(project => {
        project.classList.toggle("hidden");
    })
    on = !on;
    expandButton.textContent = on ? "mostrar menos" : "mostrar mais"
}