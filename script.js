// const tooglebutton= document.getElementById('toggle-skills') as HTMLButtonElement;
// const skills=document.getElementById('Skills') as HTMLElement;
// tooglebutton.addEventListener('click', ()=>{
//     if(skills.style.display ==="none"){
//         skills.style.display="block"
//     }
//     else {
//         skills.style.display="none"
//     }   
// });
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');
if (toggleButton && skills) {
    toggleButton.addEventListener('click', function () {
        if (skills.style.display === "none") {
            skills.style.display = "block";
        }
        else {
            skills.style.display = "none";
        }
    });
}
else {
    console.error("Elements not found in the DOM.");
}
