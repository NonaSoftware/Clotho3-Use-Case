  var loginCheck = false;

(function() {
  var app = angular.module('appPage', []);
  app.controller("DropdownController", function() {
    this.tab = 0;
    this.buttonText = functionText[this.tab];

    this.selectTab = function(setTab) {
      this.tab = setTab;
      this.buttonText = functionText[this.tab];
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

    this.csqClick = function(){
      if (this.tab === 1){
        $('#error_field').text('Cannot create user; connection may be lost or user may already exist.');
      }
      else if (this.tab === 2){

      }
      else if (this.tab === 3){

      }
    };
  });



   var functionText = ["Choose a function",
                "create()",
                "set()",
                "get()",
                "destroy()",
                "query()"];

})();

function loginClick() {
   var username = document.getElementById("username_input").value;
    var password = document.getElementById("password_input").value;
    Clotho.login(username,password).then(function(result){
			console.log(result);
      if (result != null){
        $('#error_field').text('Logged in! Welcome, '+username);
      }
      else{
        $('#error_field').text('Cannot log in; connection may be lost or user may not exist.');
      }
		});
  }

function createUserClick(){
    var username = document.getElementById("new_username_input").value;
     var password = document.getElementById("new_password_input").value;
     Clotho.createUser(username,password).then(function(result){
     console.log(result);
     if (result != null){
       $('#error_field').text('User is Created! Welcome, '+username+'. Please try logging in now!');
     }
     else{
       $('#error_field').text('Cannot create user; connection may be lost or user may already exist.');
     }
  });
}
