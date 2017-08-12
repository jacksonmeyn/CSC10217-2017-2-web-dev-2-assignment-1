
//Add error messages to alert box
function buildErrorAlert(existingError, errorToAdd) {
         
   var newError;
   
   //Don't add line break if error blank
   if (existingError == undefined) {
      newError = errorToAdd;
   } else { //Add line break and new error to existing error
      newError = existingError + "\n" + errorToAdd;
   }
   
   return newError;
   
}

function formValidate(event) {
   
   
   var error;
   
   //Save some typing :)
   const joinForm = document.forms[0];
   
   //Declare error messages
   const surnameEmpty = "Please enter a surname";
   const fnameEmpty = "Please enter your first name(s)";
   const occupationEmpty = "Please choose an occupation from the list";
   const emailEmpty = "You chose email as your preferred contact method, but didn't enter an " +
   "email address.";
   const landlinePhoneEmpty = "You chose landline phone as your preferred contact method, but " +
   "didn't enter a landline phone number";
   const landlinePhoneFormat = "The landline number must be in the format (XX) XXXX XXXX " +
   "(including brackets and spaces)";
   const mobilePhoneEmpty = "You chose mobile phone as your preferred contact method, but " +
   "didn't enter a mobile phone number";
   const mobilePhoneFormat = "The mobile number must be in the format XXXX XXX XXX (including " +
   "spaces)";
   const addressEmpty = "You chose to be posted our monthly magazine, but " +
   "didn't complete all address fields";
   const postcodeFormat = "The postcode must be 4 digits";
   const usernameEmpty = "Please enter a username";
   const usernameFormat = "Your username must be 6-10 characters with no spaces";
   const passwordEmpty = "Please enter a password";
   const passwordsDontMatch = "The passwords don't match";
   const passwordFormat = "The password must contain one uppercase letter, one lowercase letter, " +
   "one number and one special character.";
   
   //Declare required regexps for format checking
   const landlinePhoneRequirements = /\(0([2-3]|[6-9])\)\s\d{8}/;
   const mobilePhoneRequirements = /0(4|5)\d{2}\s\d{3}\s\d{3}/;
   const postcodeRequirements = /\d{4}/;
   const usernameRequirements = /[^\s]{6,10}/;
   const passwordRequirements = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

   //Surnames not blank?
   if (joinForm.surname.value == "") {
      
      error = buildErrorAlert(error, surnameEmpty);
   
   }
   
   
   //Firstnames not blank?
   if (joinForm.fname.value == "") {
   
      error = buildErrorAlert(error, fnameEmpty);
   
   }
   
   //Occupation not blank?
   if (joinForm.occupation.value == "") {
   
      error = buildErrorAlert(error, occupationEmpty);
   
   }
   
   //Email not blank if preferred contact method?
   if (joinForm.emailAddress.value == "" && joinForm.preferredContact.value == "email") {
   
      error = buildErrorAlert(error, emailEmpty);
   
   }
   
   //Daytime phone not blank if preferred contact method?
   if (joinForm.daytimePhone.value == "" && joinForm.preferredContact.value == "landlinePhone") {
   
      error = buildErrorAlert(error, landlinePhoneEmpty);
   
   }
   
   //Landline phone format ok?
   if (joinForm.daytimePhone.value != "" && !landlinePhoneRequirements.test(joinForm.daytimePhone.value)) {
      
      error = buildErrorAlert(error, landlinePhoneFormat);
      
   }
   
   //Mobile not blank if preferred contact method?
   if (joinForm.mobile.value == "" && joinForm.preferredContact.value == "mobilePhone") {
   
      error = buildErrorAlert(error, mobilePhoneEmpty);
   
   }
   
   //Mobile phone format ok?
   if (joinForm.mobile.value != "" && !mobilePhoneRequirements.test(joinForm.mobile.value)) {
      
      error = buildErrorAlert(error, mobilePhoneFormat);
      
   }
   
   //Address fields not blank if magazine requested?
   if (joinForm.magazineOptIn.value == "on") {
      if (joinForm.streetaddress.value == "" || 
          joinForm.suburb.value == "" ||
          joinForm.postcode.value == "") {
             
             error = buildErrorAlert(error, addressEmpty);
             
          }
   }
   
   //Postcode format ok?
   if (joinForm.postcode.value != "" && !postcodeRequirements.test(joinForm.postcode.value)) {
      
      error = buildErrorAlert(error, postcodeFormat);
      
   }
   
   //Username not blank?
   if (joinForm.username.value == "") {
   
      error = buildErrorAlert(error, usernameEmpty);
   
   }
   
   //Username format ok?
   if (joinForm.username.value != "" && !usernameRequirements.test(joinForm.username.value)) {
      
      error = buildErrorAlert(error, usernameFormat);
      
   }
   
   //Password not blank?
   if (joinForm.password.value == "") {
   
      error = buildErrorAlert(error, passwordEmpty);
   
   }
   
   //Password format ok?
   if (joinForm.password.value != "" && !passwordRequirements.test(joinForm.password.value)) {
      
      error = buildErrorAlert(error, passwordFormat);
      
   }
   
   //Passwords match?
   if (joinForm.password.value != joinForm.confirmPassword.value) {
      
      error = buildErrorAlert(error, passwordsDontMatch);
      
   }
   
   
   //If an error message exists...
   if (error != undefined) {
      //Alert the user
      alert(error);
      
      //Prevent submission of the form
      event.preventDefault();
   } else {
      return true;
   }


} //end formValidate function