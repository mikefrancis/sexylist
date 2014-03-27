var app = angular.module('app', []);

app.controller('ItemController', function($scope) {

  $scope.items = [];

  $scope.create = function(isValid) {
    if (isValid) {
      $scope.items.push({
        title: $scope.item.title,
        done: false
      });
      $scope.item.title = '';
    }
  };

  $scope.itemsRemaining = function() {
    var count = 0;
    angular.forEach($scope.items, function(item) {
      count += item.done ? 0 : 1;
    });
    return count;
  }

  $scope.delete = function(item) {
    var index = $scope.items.indexOf(item)
    $scope.items.splice(index, 1);
  }

  $scope.truncate = function() {
    $scope.items = [];
  }

});
