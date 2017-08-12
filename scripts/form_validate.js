//Add error messages to alert box and to error spans
function buildErrorAlert(existingError, errorToAdd, elementID) {
   
   var newError;
   
   //Don't add line break if error blank
   if (existingError == undefined) {
      newError = errorToAdd;
   } else { //Add line break and new error to existing error
      newError = existingError + "\n" + errorToAdd;
   }
   
   if (document.getElementById("formError").innerHTML == "") {
      
      document.getElementById("formError").innerHTML = "There were errors above. Please check them and try again";
      
   }
   
   
   document.getElementById(elementID).innerHTML = errorToAdd;
   
   return newError;
   
}

function formValidate(event) {
   
   var error;
   
   //Clear any errors already showing
   var errorMessageSpans = document.getElementsByClassName("error");
   for (var i = 0; i < errorMessageSpans.length; i++) {
      var errorId = errorMessageSpans[i].id;
      document.getElementById(errorId).innerHTML = "";
   }
   
   //Save some typing :)
   const joinForm = document.forms[0];
   
   //Declare error messages
   const emailEmpty = "You chose email as your preferred contact method, but didn't enter an " +
   "email address.";
   const landlinePhoneEmpty = "You chose landline phone as your preferred contact method, but " +
   "didn't enter a landline phone number";
   const mobilePhoneEmpty = "You chose mobile phone as your preferred contact method, but " +
   "didn't enter a mobile phone number";
   const addressEmpty = "You chose to be posted our monthly magazine, but " +
   "didn't complete all address fields";
   const passwordsDontMatch = "The passwords don't match";

   
   //Email not blank if preferred contact method?
   if (joinForm.emailAddress.value == "" && joinForm.preferredContact.value == "email") {
   
      error = buildErrorAlert(error, emailEmpty, "emailEmpty");
   
   }
   
   //Daytime phone not blank if preferred contact method?
   if (joinForm.daytimePhone.value == "" && joinForm.preferredContact.value == "landlinePhone") {
   
      error = buildErrorAlert(error, landlinePhoneEmpty, "landlinePhoneEmpty");
   
   }
   
   //Mobile not blank if preferred contact method?
   if (joinForm.mobile.value == "" && joinForm.preferredContact.value == "mobilePhone") {
   
      error = buildErrorAlert(error, mobilePhoneEmpty, "mobilePhoneEmpty");
   
   }
   
   //Address fields not blank if magazine requested?
   if (joinForm.magazineOptIn.checked == true) {
      if (joinForm.streetaddress.value == "" || 
          joinForm.suburb.value == "" ||
          joinForm.postcode.value == "") {
             
             error = buildErrorAlert(error, addressEmpty, "addressEmpty");
             
          }
   }
   
   //Passwords match?
   if (joinForm.password.value != joinForm.confirmPassword.value) {
      
      error = buildErrorAlert(error, passwordsDontMatch, "passwordsDontMatch");
      
   }
   
   
   //If an error message exists...
   if (error != undefined) {
      //Alert the user
      alert(error);
      
      //Remove the error near the submit button after 10 seconds
      setTimeout(function () {
         document.getElementById("formError").innerHTML = "";
      }, 10000);
      
      //Prevent submission of the form
      event.preventDefault();
   } else {
      return true;
   }


} //end formValidate function