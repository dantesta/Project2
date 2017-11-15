$(document).ready(function() {
  
  var nameInput = $("#name");
  var userList = $("tbody");
  var userContainer = $(".user-container");
  var emailInput = $("#email");
  var userName = $("#username");

 
  
  $(document).on("submit", "#signup", handleUserFormSubmit);
  

  
        // getUsers();

  
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

 
 

  // Function for retrieving authors and getting them ready to be rendered to the page
  // function getUsers() {
  //   $.get("/api/authors", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(createAuthorRow(data[i]));
  //     }
  //     renderAuthorList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }

  // A function for rendering the list of authors to the page
  // function renderAuthorList(rows) {
  //   authorList.children().not(":last").remove();
  //   authorContainer.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     authorList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }