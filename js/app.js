

(function() {
  var app = angular.module('appPage', []);
  var kvObj = {};

  $("#panel").slideUp();
  $("#flip").click(function(){
      $("#panel").slideToggle("fast");
  });
//toggles help on the function page
  app.directive("functionsHelp", function() {
    return {
      restrict: 'E',
      templateUrl: 'functions-help.html'
    };
  });

  app.directive("menuBar", function() {
    return {
      restrict: 'E',
      templateUrl: 'menu-bar.html'
    };
  });

  app.directive("keyValue", function() {
    return {
      restrict: 'E',
      templateUrl: 'key-value.html'
    };
  });

  app.directive("createPage", function() {
    return {
      restrict: 'E',
      templateUrl: 'functions-create.html'
    };
  });

  app.controller("functionController", function () {
    this.kvObj = kvObj;
  });

//dropdown controller for functions
  app.controller("DropdownController", function() {
    this.tab = 0;
    this.pill = 1;
    this.val = 0;
    this.map = [];
    this.buttonText = functionText[this.tab];
    this.tempObj = {};

    this.kvlist = [{}];  //array of key-value objects [{key:'asdf', value:'1234'},{...},{...}]

//expanding or deleting elements in a map
    this.addRow = function() {
      var emptyObj= {};
      this.kvlist.push(emptyObj);
    };

    this.deleteRow = function() {
      this.kvlist[kvlist.length - 1] = {};
      this.kvlist.pop();
    };

    this.selectPill = function(setPill) {
      $('#error_field').text(" ");
      this.pill = setPill;
    };

    this.isSelectedPill = function(checkPill) {
      return this.pill === checkPill;
    };

    this.selectTab = function(setTab) {
      $('#error_field').text(" ");
      this.tab = setTab;
      this.buttonText = functionText[this.tab];
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

//communicating with clotho based on the function and input method
//includes some basic error checking
    this.functionClick = function(qOne, map, funcNum){
      switch(funcNum){

        //create function
        case 1:
          if(map){
            try{
              Clotho.create(kvObj).then(function(result){
                //ADD FUNCTION THAT SETS drop.kvlist.length = 0 (kvlist might be encapsulated in Drop)
                this.kvlist.length = 0;
                console.log(this.kvlist.length);
                console.log(result);
                if (result === undefined){
                  $('#error_field').text('Object(s) already exist');
                }
                else{
                  var data = JSON.stringify(result, null, 3);
                  $('#error_field').text('Object(s) created with ID: ' + data);
                }
              });
            }
            catch(err){
              $('#error_field').text(err.message);
            }
        }
        else if (document.getElementById("json_obj").value!=""){
            try{
              var obj = JSON.parse(document.getElementById("json_obj").value);
              Clotho.create(obj).then(function(result){
                console.log(result);
                if (result === undefined){
                  $('#error_field').text('Object(s) already exist');
                }
                else{
                  var data = JSON.stringify(result, null, 3);
                  $('#error_field').text('Object(s) created with ID: ' + data);
                }
              });
            }
            catch(err){
              $('#error_field').text(err.message);
            }
          }
        else{
          $('#error_field').text('Please fill out the appropriate fields.');
        }
      break;

      //set function
        case 2:
            try{
              var obj = JSON.parse(document.getElementById("edit_json_object").value);
              Clotho.set(obj).then(function(result){
                console.log(result);
                $('#error_field').text('Object(s) with ID: ' + result + ' changed.');
              });
            }
            catch (err){
              $('#error_field').text(err.message);
            }
         break;

         //query function
         case 3:
         if (map){
           if(qOne){
             try{
               Clotho.queryOne(kvObj).then(function(result){
                 console.log(result);
                 var data = JSON.stringify(result, null, 3);
                 $("#edit_json_object").val(data);
                 $('#error_field').text('Objects found: ' + data);
               });
             }
             catch(err){
               $('#error_field').text(err.message);
             }
           }
           else{
             try{
               Clotho.query(kvObj).then(function(result){
                 console.log(result);
                 var data = JSON.stringify(result, null, 3);
                 $("#edit_json_object").val(data);
                 $('#error_field').text('Objects found: ' + data);
               });
             }
             catch(err){
               $('#error_field').text(err.message);
             }
           }
          }
         else if (document.getElementById("json_obj").value!=""){
           if(qOne){
             try{
               var obj = JSON.parse(document.getElementById("json_obj").value);
               Clotho.queryOne(obj).then(function(result){
                 console.log(result);
                 var data = JSON.stringify(result, null, 3);
                 $("#edit_json_object").val(data);
                 $('#error_field').text('Objects found: ' + data);
               });
             }
             catch(err){
               $('#error_field').text(err.message);
             }
           }
           else{
             try{
               var obj = JSON.parse(document.getElementById("json_obj").value);
               Clotho.query(obj).then(function(result){
                 console.log(result);
                 var data = JSON.stringify(result, null, 3);
                 $("#edit_json_object").val(data);
                 $('#error_field').text('Objects found: ' + data);
               });
             }
             catch(err){
               $('#error_field').text(err.message);
             }
           }
         }
         else{
           $('#error_field').text('Please fill out the appropriate fields.');
         }
         break;

         //destroy function
       case 4:
        try{
          var id = document.getElementById("id_number").value;
     		  Clotho.destroy(id).then(function(result){
   			      console.log(result);
              $('#error_field').text('Destroyed object with ID: '+result);
            });
          }
        catch(err){
            $('#error_field').text(err.message);
          }
          break;

      //get function
       case 5:
       try{
         var id = document.getElementById("id_number").value;
         Clotho.get(id).then(function(result){
             console.log(result);
             if (result === undefined){
               $('#error_field').text('Object does not exist');
             }
             else{
               var data = JSON.stringify(result, null, 3);
               $('#error_field').text('Object details: '+ data);
             }
           });
         }
       catch(err){
           $('#error_field').text(err.message);
         }
         break;

     };
    };
  });


//text for the dropdown controller
   var functionText = ["Choose a function",
                "create()",
                "set()",
                "query()",
                "destroy()",
                "get()"];

})();


//login function
//contains some error checking
function loginClick() {
  try{
    var username = document.getElementById("username_input").value;
    var password = document.getElementById("password_input").value;
    Clotho.login(username,password).then(function(result){
			console.log(result);
      if (result != null){
        $('#error_field').text('Logged in! Welcome, '+username);
      }
      else{
        $('#error_field').text('Cannot log in; you are already logged in or user may not exist.');
      }
		});
  }
  catch(err){
      $('#error_field').text(err.message);
  }
}

//create user function
//contains some error checking
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

//logout function
//contains some error checking
function logoutClick(){
  try{
    Clotho.logout().then(function(result){
      console.log(result);
      if(result){
        $('#error_field').text('You have sucessfully logged out, Goodbye!');
      }
    });
  }
  catch(err){
    $('#error_field').text(err.message);
  }
}
