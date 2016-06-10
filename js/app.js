

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
  });



   var functionText = ["Choose a function",
                "create()",
                "set()",
                "get()",
                "destroy()",
                "query()"];

})();

function loginClick() {
    var username = $(".username_input").val();
    var password = $(".password_input").val();
    Clotho.login(username,password).then(function(result){
			console.log(result);
		});
  }

function createUserClick(){
    var username = $(".new_username_input").val();
     var password = $(".new_password_input").val();
     Clotho.createUser(username,password).then(function(result){
     console.log(result);
  });
}
