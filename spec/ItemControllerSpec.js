describe('ItemController', function() {

  beforeEach(module('app'));

  var $controller,
      $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  it ('adds a new, uncompleted task', function() {
    var scope = $rootScope.$new(),
        controller = $controller('ItemController', { $scope: scope });
    scope.item = {
      title: 'Testing code'
    };
    scope.create(true);
    scope.$digest();
    expect(scope.items[0].title).toEqual('Testing code');
    expect(scope.items[0].complete).toEqual(false);
  });

  it ('deletes a task', function() {
    var scope = $rootScope.$new(),
        controller = $controller('ItemController', { $scope: scope });
    scope.items = [{
      title: 'Testing code',
      complete: false
    }];
    scope.delete(0);
    expect(scope.items).toEqual([]);
  });

  it ('deletes all tasks', function() {
    var scope = $rootScope.$new(),
        controller = $controller('ItemController', { $scope: scope });
    scope.items = [
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
    scope.truncate();
    expect(scope.items).toEqual([]);
  });

});