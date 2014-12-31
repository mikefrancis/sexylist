var app = angular.module('app', []);

app.factory('ItemFactory', function() {
  return {
    set: function(items) {
      localStorage.setItem('items', JSON.stringify(items));
    },

    get: function() {
      return JSON.parse(localStorage.getItem('items')) || [];
    }
  }
});

app.controller('ItemController', function($scope, ItemFactory) {

  $scope.items = ItemFactory.get();


  $scope.create = function(isValid) {
    if (! isValid) {
      return false;
    }
    var item = {
      title: $scope.item.title,
      complete: false
    };
    $scope.items.push(item);
    $scope.item.title = '';
    return item;
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


  // $scope.$watch('items', function(newItems, oldItems) {
  //   if (newItems != oldItems) {
  //     ItemFactory.set(newItems);
  //   }
  // }, true);

});