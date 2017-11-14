$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#name");
  var userList = $("tbody");
  var userContainer = $(".user-container");
  var emailInput = $("#email");
  var userName = $("#username");

 
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#.user-container", handleAuthorFormSubmit);
  

  // Getting the intiial list of Authors
  getUsers();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertUser({
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      username: userName.val().trim()

    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertUser(userData) {
    $.post("/api/", userData)
      // .then(getUsers);
  }

 
 

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
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }