describe('ItemController', function() {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it ('adds a new, uncompleted task', function() {
    $scope = {};
    var controller = $controller('ItemController', { $scope: $scope });
    $scope.item = {
      title: 'Testing code'
    };
    $scope.create(true);
    expect($scope.items[0].title).toEqual('Testing code');
    expect($scope.items[0].complete).toEqual(false);
  });

  it ('deletes a task', function() {
    $scope.items = [{
      title: 'Testing code',
      complete: false
    }];
    $scope.delete(0);
    expect($scope.items).toEqual([]);
  });

  it ('deletes all tasks', function() {
    $scope.items = [
      {
        title: 'Testing code',
        complete: false
      },
      {
        title: 'Eating breakfast',
        complete: true
      },
      {
        title: 'Jumping a shark',
        complete: false
      },
    ];
    $scope.truncate();
    expect($scope.items).toEqual([]);
  });

});