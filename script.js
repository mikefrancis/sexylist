function ItemController($scope) {

  $scope.items = [
    {
      title: 'Clothes',
      done: true
    },
    {
      title: 'Boots',
      done: false
    },
    {
      title: 'Motorcycle',
      done: false
    }
  ];

  $scope.createItem = function() {
    if (typeof $scope.itemTitle === 'undefined' || $scope.itemTitle == '')
      return false;
    $scope.items.push({
      title: $scope.itemTitle
    });
    $scope.itemTitle = '';
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

  $scope.deleteAll = function() {
    $scope.items = [];
  }

}