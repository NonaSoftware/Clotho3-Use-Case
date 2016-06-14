

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
    this.dummyArray = [0];
    this.val = 0;
    this.buttonText = functionText[this.tab];

    this.selectTab = function(setTab) {
      $('#error_field').text(" ");
      this.tab = setTab;
      this.buttonText = functionText[this.tab];
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };



    this.addRow = function() {
      this.val += 1;
      this.dummyArray.push(this.val);
    };

    this.queryAllClick = function(){
      //insert adding in key/value pairs here
      if (document.getElementById("json_obj").value!=""){
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
      else{
        $('#error_field').text('Please fill out the appropriate fields.');
      }
   };

    this.queryOneClick = function(){
      //insert adding in key/value pairs here
      if (document.getElementById("json_obj").value!=""){
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
        $('#error_field').text('Please fill out the appropriate fields.');
      }
    };


    this.csqClick = function(){
      switch(this.tab){

       case 1:
       //insert getting the key-value pairs here
       if (document.getElementById("json_obj").value!=""){
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

        case 2:
            try{
              var obj = JSON.parse(document.getElementById("edit_json_object").value);
              Clotho.set(obj).then(function(result){
                console.log(result);
                $('#error_field').text('Object(s) changed.');
              });
            }
            catch (err){
              $('#error_field').text(err.message);
            }
         break;


       case 4:
          var id = document.getElementById("id_number").value;
     		  Clotho.destroy(id).then(function(result){
   			      console.log(result);
              $('#error_field').text('Destroyed object with ID: '+result);
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
