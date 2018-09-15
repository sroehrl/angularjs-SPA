global = @

global.app = angular.module('app', [
  'ngMaterial'
  'ngMessages'
  'ui.router'
])
global.app.config ($stateProvider) ->

  temp = (name) ->
    'template/' + name + '.html'

  $stateProvider.state('index',
    url: '/index'
    template: '<h1>Index</h1>').state 'demo',
    url: ''
    controller: 'demoCtrl'
    templateUrl: temp('demo.view')
  return
