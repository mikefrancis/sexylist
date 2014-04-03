var app = angular.module('app', []);

// Not using factory at the moment

app.factory('itemsFactory', function() {

  return {

    set: function(item) {
      var items = this.get();
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    },

    get: function() {
      return JSON.parse(localStorage.getItem('items')) || [];
    }

  }
  
});

app.controller('ItemController', function($scope) {

  $scope.items = JSON.parse(localStorage.getItem('items')) || [];

  $scope.create = function(isValid) {
    if (isValid) {
      $scope.items.push({
        title: $scope.item.title,
        complete: false
      });
      $scope.item.title = '';
    }
  };

  $scope.itemsRemaining = function() {
    var count = 0;
    angular.forEach($scope.items, function(item) {
      count += item.complete ? 0 : 1;
    });
    return count;
  }

  $scope.delete = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  }

  $scope.truncate = function() {
    $scope.items = [];
  }

  $scope.$watch('items', function(newItem, oldItem) {
    if (newItem != oldItem) {
      localStorage.setItem('items', JSON.stringify(newItem));
    }
  }, true);

});
