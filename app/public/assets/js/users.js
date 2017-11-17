$(document).ready(function() {
  
  var nameInput = $("#name");
  var userList = $("tbody");
  var userContainer = $(".user-container");
  var emailInput = $("#email");
  var userName = $("#username");

 
  
  $(document).on("submit", "#signup", handleUserFormSubmit);
  
  
  function handleUserFormSubmit(event) {
    event.preventDefault();
    
    if (!nameInput.val().trim().trim()) {
      return;
    }
    
    upsertUser({
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      username: userName.val().trim()

    });

  }


  function upsertUser(userData) {
    console.log(userData)
    $.post("/api/newuser", userData)
      .then(function(data) {
          console.log(data);
      });
  }

});