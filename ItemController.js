function ItemController($scope) {

  $scope.items = window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [];

  console.log($scope.items);

  $scope.createItem = function() {
    if (typeof $scope.itemTitle === 'undefined' || $scope.itemTitle == '')
      return false;
    $scope.items.push({
      title: $scope.itemTitle
    });
    $scope.itemTitle = '';
    window.localStorage.setItem('items', JSON.stringify($scope.items));
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
    window.localStorage.setItem('items', JSON.stringify($scope.items));
  }

  $scope.deleteAll = function() {
    $scope.items = [];
    window.localStorage.setItem('items', JSON.stringify($scope.items));
  }

}