var app = angular.module('app', []);

app.factory('itemsFactory', function() {

  return {

    set: function(items) {
      localStorage.setItem('items', JSON.stringify(items));
    },

    get: function() {
      return JSON.parse(localStorage.getItem('items')) || [];
    }

  }
  
});

app.controller('ItemController', function($scope, itemsFactory) {

  $scope.items = itemsFactory.get();

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

  $scope.$watch('items', function(newItems, oldItems) {
    if (newItems != oldItems) {
      itemsFactory.set(newItems);
    }
  }, true);

});
