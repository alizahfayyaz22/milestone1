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

const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('Skills') as HTMLElement;


  toggleButton.addEventListener('click', () => {
    if (skills.style.display === "none") {
      skills.style.display = "block";
    } else {
      skills.style.display = "none";
    }
  
 else {
  console.error("Elements not found in the DOM.");
}
  });