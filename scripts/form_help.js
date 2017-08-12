function updateText(message) {
   document.getElementById("helpText").innerHTML = message;
}

function updateHelpTipsDiv() {
   
   const surnameHelp = "Your surname (a.k.a family name) can be up to 50 characters long. This field is mandatory.";
   const firstNamesHelp = "Your first name(s) can be up to 60 characters long. This field is mandatory.";
   const preferredContactHelp = "Choose your preferred contact method. The corresponding contact field below will become compulsory";
   const emailHelp = "Your email must contain an @ symbol and at least one fullstop after the @. Example: you@yourdomain.com";
   const landlineHelp = "Enter the landline you can be called on during business hours. Format must be (XX) XXXX XXXX (including brackets and spaces)";
   const mobileHelp = "Enter your mobile phone number. Format must be XXXX XXX XXX (including spaces)";
   const magazineOptInHelp = "Check this box if you'd like to receive our monthly magazine by post. If checked, the postal address fields will become compulsory";
   const streetAddressHelp = "Enter your street name and number";
   const suburbHelp = "Enter the suburb or city name your street is in";
   const postcodeHelp = "Enter your postcode. It must be exactly 4 digits";
   const usernameHelp = "Choose a username. It must be 6-10 characters with no spaces";
   const passwordHelp = "Choose a password. It can be up to 10 characters long and must contain:" +
   "<ul>" +
      "<li>an uppercase letter,</li>" +
      "<li>an a lowercase letter,</li>" +
      "<li>a number,</li>" +
      "<li>and a special character</li>" +
   "</ul>"
   const confirmPasswordHelp = "Retype the password you chose for confirmation";
   
   switch(this.id) {
      case "surname":
         updateText(surnameHelp);
         break;
      case "fname":
         updateText(firstNamesHelp);
         break;
      case "emailRadio":
      case "landlinePhoneRadio":
      case "mobilePhoneRadio":
         updateText(preferredContactHelp);
         break;
      case "email":
         updateText(emailHelp);
         break;
      case "daytimePhone":
         updateText(landlineHelp);
         break;
      case "mobilePhone":
         updateText(mobileHelp);
         break;
      case "magazineOptIn":
         updateText(magazineOptInHelp);
         break;
      case "streetaddress":
         updateText(streetAddressHelp);
         break;
      case "suburb":
         updateText(suburbHelp);
         break;
      case "postcode":
         updateText(postcodeHelp);
         break;
      case "username":
         updateText(usernameHelp);
         break;
      case "password":
         updateText(passwordHelp);
         break;
      case "confirmPassword":
         updateText(confirmPasswordHelp);
         break;
      default:
         updateText("No tips for this field. Choose another field to get help");
   }
   
}