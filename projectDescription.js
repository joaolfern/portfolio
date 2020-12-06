const expandButtons = document.querySelectorAll(".description__button");
const descriptions = document.querySelectorAll(".description");
const toggleableIcons = document.querySelectorAll(".fa-angle-down");
const sourceButtons = document.querySelectorAll(".project__codeBtn");

expandButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        if(descriptions.item(i).classList.toggle("description--shown")){
            toggleableIcons.item(i).classList.replace("fa-angle-down", "fa-angle-up");
        }
        else{
            toggleableIcons.item(i).classList.replace("fa-angle-up", "fa-angle-down");
            
        }
        sourceButtons.item(i).classList.toggle("project__codeBtn--shown");
    });
    button.addEventListener('mouseover', () => {
        descriptions.item(i).classList.add('description--preview');
    });
    button.addEventListener('mouseout', () => {
        descriptions.item(i).classList.remove('description--preview');
    });
});