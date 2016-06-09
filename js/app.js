(function() {
  var app = angular.module('appPage', []);

  app.controller("DropdownController", function() {
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

})();
