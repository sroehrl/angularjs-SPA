class demoCtrl
  constructor: ($scope) ->
    $scope.name = 'test'
    $scope.click = () ->
      alert '*foo*'

demoCtrl.$inject = ['$scope']

@.app.controller('demoCtrl',demoCtrl)