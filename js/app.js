

(function() {
  var app = angular.module('appPage', []);


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

  app.controller("DropdownController", function() {
    this.tab = 0;
    this.buttonText = functionText[this.tab];

    this.selectTab = function(setTab) {
      $('#error_field').text(" ");
      this.tab = setTab;
      this.buttonText = functionText[this.tab];
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };


    this.addRow = function($scope) {
      $('.key-value-pairs').append("<div class = 'row'><div class = 'col-md-6'><div class='form-group'><input type='text' class='form-control'></div></div><div class = 'col-md-6'><div class='form-group'><input type='text' class='form-control'></div></div></div>");
    }


    this.csqClick = function(){
      switch(this.tab){

       case 1:
        if (document.getElementById("map_key1").value!="" && document.getElementById("map_value1").value!=""){
          var obj = {};
          obj[document.getElementById("map_key1").value] = document.getElementById("map_value1").value;
          obj[document.getElementById("map_key2").value] = document.getElementById("map_value2").value;
          obj[document.getElementById("map_key3").value] = document.getElementById("map_value3").value;
          Clotho.create(obj).then(function(result){
      			console.log(result);
            if (result != null){
              $('#error_field').text('Object created with ID: ' +result);
            }
            else{
              $('#error_field').text('Cannot create object; connection may be lost or you may not be logged in.');
            }
      		});
        }
        else if (document.getElementById("json_object").value!=""){
            var obj = JSON.parse(document.getElementById("json_object").value);
            Clotho.create(obj).then(function(result){
      			console.log(result);
            if (result != null){
              $('#error_field').text('Object created with ID: ' +result);
            }
            else{
              $('#error_field').text('Cannot destroy object; connection may be lost or you may not be logged in.');
            }
      		});
        }
        else{
          $('#error_field').text('Please fill out the appropriate fields.');
        }
        break;

        case 2:

         break;

         case 3:
          if (document.getElementById("map_key1").value!="" && document.getElementById("map_value1").value!=""){
            var obj = {};
            obj[document.getElementById("map_key1").value] = document.getElementById("map_value1").value;
            obj[document.getElementById("map_key2").value] = document.getElementById("map_value2").value;
            obj[document.getElementById("map_key3").value] = document.getElementById("map_value3").value;
            Clotho.query(obj).then(function(result){
        			console.log(result);
              if (result != null){
                var data = JSON.stringify(result);
                $('#error_field').text('Objects found: ' + data);
              }
              else{
                $('#error_field').text('Cannot create object; connection may be lost or you may not be logged in.');
              }
        		});
          }
          else if (document.getElementById("json_object").value!=""){
              var obj = JSON.parse(document.getElementById("json_object").value);
              Clotho.query(obj).then(function(result){
        			console.log(result);
              if (result != null){
                var data = JSON.stringify(result);
                $('#error_field').text('Objects found: ' + data);
              }
              else{
                $('#error_field').text('Cannot destroy object; connection may be lost or you may not be logged in.');
              }
        		});
          }
          else{
            $('#error_field').text('Please fill out the appropriate fields.');
          }
          break;
       case 4:
          var id = document.getElementById("id_number").value;
     		  Clotho.destroy(id).then(function(result){
   			      console.log(result);
              if (result != null){
                $('#error_field').text('Destroyed object with ID: '+result);
              }
              else{
                $('#error_field').text('Cannot destroy object; connection may be lost or object may not exist.');
              }
          });
          break;

       case 5:
          var id = document.getElementById("id_number").value;
          Clotho.get(id).then(function(result){
            console.log(result);
            if (result != null){
              var data = JSON.stringify(result);
              $('#error_field').text('Object details: '+data);
            }
            else{
              $('#error_field').text('Cannot get object; connection may be lost or object may not exist.');
            }
          });
       break;

     };
    };
  });


   var functionText = ["Choose a function",
                "create()",
                "set()",
                "query()",
                "destroy()",
                "get()"];

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
