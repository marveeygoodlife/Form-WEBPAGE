document.addEventListener("DOMContentLoaded",()=>{
    // variable to hold the element ID's
const loginName = document.getElementById("loginname");
const loginPassword = document.getElementById("loginpassword");
const  button =document.getElementById("button");
const displayOutput = document.getElementById("output");
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

// add event listener to the button to execute the function when the button is  clicked. 
button.addEventListener("click", () => { 
const userName = loginName.value;
const passWord = loginPassword.value;
  // Display in the modal
  modalContent.textContent = `Username: ${userName}\nPassword: ${passWord}`;
  modal.style.display = 'block'; // Show modal
//show user details on the page
 })
// function to get the user input

 })