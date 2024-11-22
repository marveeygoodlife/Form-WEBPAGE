document.addEventListener("DOMContentLoaded",()=>{
    // variable to hold the element ID's
     const userName = document.getElementById("loginName");
    const userPassword = document.getElementById("loginPassword");
const  button =document.getElementById("button");
 function showInput(value){
    console.log(value);
 }
// add event listener to the button
button.addEventListener("click", () =>{ 
    showInput(userName.value)
})
// function to get the user input

 })