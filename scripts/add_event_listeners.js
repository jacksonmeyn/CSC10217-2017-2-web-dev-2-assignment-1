//Add any event listeners the site needs
function addEventListeners() {
   
   var form = document.getElementById("joinForm");
   
   //Add submit event to form
   form.addEventListener("submit", formValidate, false);
   
   window.addEventListener("scroll", moveHelpDiv, false);
   
   //Add onfocus event to each input field so the help tips are updated each time.
   var formInputs = form.getElementsByTagName("INPUT");
   for (var i = 0; i <= formInputs.length; i++) {
      (function() {
         var inputId = formInputs[i].id;
         document.getElementById(inputId).addEventListener("focus", updateHelpTipsDiv, false)
      })();
   }
   
}

function moveHelpDiv() {
   
   var inputHelp = document.getElementById("inputHelp")
   
   if (window.scrollY > document.getElementById("header").clientHeight) {
      inputHelp.style.position = "fixed";
      inputHelp.style.top = "10px";
      
      
      
      var starting = Math.round((window.innerWidth - document.getElementById("wrapper").clientWidth) / 2);
      
      var rightOffset = starting + document.getElementById("aside").clientWidth;
      inputHelp.style.right = rightOffset + "px";
      
   } else {
      inputHelp.style.position = "static";
   }
      
}