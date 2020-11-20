const hiddenProjects = document.querySelectorAll(".hidden");
const expandButton = document.querySelector(".project-tile__expandBtn")
let on = false;

function showProjects(){
    hiddenProjects.forEach(project => {
        project.classList.toggle("hidden");
    })
    on = !on;
    expandButton.textContent = on ? "-" : "+"
}