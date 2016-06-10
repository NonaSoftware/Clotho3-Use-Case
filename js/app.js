

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

  app.controller("loginController", function() {
    
  });



   var functionText = ["Choose a function",
                "create()",
                "set()",
                "get()",
                "destroy()",
                "query()"];

})();
