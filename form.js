function formvalidation(){
let name=document.getElementById("username");
let email=document.getElementById("email");
if(name.ariaValueMax.trim()===""){
    let error = document.getElementById("nameError");
    error.textContent = "name must be filled";
}
     else if (name.value.trim().length < 3) {
         let error = document.getElementById("nameError");
         error.textContent = "name must be atleast 3";
   }
    else  {
        let error = document.getElementById("nameError");
         error.textContent = "";
   }

 }








// function validate() {

//     let username = document.getElementById("username");
//     let email = document.getElementById("email");
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     if (username.value.trim() === '') {
//         let error = document.getElementById("usernameError");
//         error.textContent = "Username must be filled";
//     }

//     else if (username.value.trim().length < 4) {
//         let error = document.getElementById("usernameError");
//         error.textContent = "Username must be atleast 4";
//     }
//      else  {
//         let error = document.getElementById("usernameError");
//         error.textContent = "";
//     }


//     if (email.value.trim()===''){
//          let error = document.getElementById("emailError");
//         error.textContent = "Enter a valid email";
        
//     }

//      else if (!emailRegex.test(email.value.trim())){
//          let error = document.getElementById("emailError");
//         error.textContent = "Enter a valid email";
        
//     }

//     else{
//         let error = document.getElementById("emailError");
//         error.textContent = "";
//     }


// }
 