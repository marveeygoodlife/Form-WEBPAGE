
//SIGN UP FORM JAVASCRIPT. /* THIS SCRIPT WILL HANDLE USER INPUT, COMPARE THE VALUES FOR THE PASSWORD AND ALLOW USER TO PROCEED IF THE VALUES MATCH, ELSE IT WILL DISPLAY AN ERROR FOR THE USER TO CORRECT. */

document.addEventListener("DOMContentLoaded", () => {
    //variable to get the form from the html document

    const signUpForm = document.getElementById('signUpForm');
    const errorMessage = document.getElementById('errorMessage');

//variable to call  the password input  from html and also validate each input field to make sure that none is empty.

const enterPassword = document.getElementById('inputPassword');
const verifyPassword = document.getElementById('verifyPassword');
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const email = document.getElementById("emailAddress");
const userCountry = document.getElementById("country");

//adding  asubmit event listener   to my form

 signUpForm.addEventListener('submit', (event)=>{
    console.log("Submit event triggered"); // Debugging

event.preventDefault(); //stop default submit behaviour, it gives me control to validate the input first before it is submitted

  // Check if any fields are empty
  
  if (!inputPassword.value || !verifyPassword.value || !fullName.value || !userName.value || !email.value ||!userCountry.value) {
    console.log("Validation failed: Some fields are empty."); // Debugging

    errorMessage.style.display = "block";
    errorMessage.textContent = "All fields are required!";

    return;
}
//check if the password match(validation)
if (enterPassword.value !== verifyPassword.value) {
        // display error message
        errorMessage.textContent = "Passwords do not match.!";

    console.log("Validation failed: Passwords do not match."); // Debugging

 errorMessage.style.display = "block";
  }  else {
 //hide the error message
 errorMessage.style.display ="none";

       // Because I prevented the default submit behaviour I have to enable it here after the validation has occured.
       console.log("Passwords match! Submitting form...");
       signUpForm.submit();
 }
})


})