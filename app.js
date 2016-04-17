var myApp = angular.module('myApp', ['ngResource']);
/*
}]);*/


myApp.controller('MainCtrl', ['$rootScope', '$scope', 'translation', function ($rootScope, $scope, translation) {
  translation.getTranslation($rootScope, 'English');
  $scope.selected = 'English';

  $scope.hidePhoto = true;

  $scope.changeLangage = function(langage) {
    if(langage == 'English')
    {
      $scope.hidePhoto = true;
    }
    else
    {
      $scope.hidePhoto = false;
    }

    translation.getTranslation($rootScope, langage);
    $scope.selected = langage;
  };
  $scope.isSelected = function(langage){
    return $scope.selected === langage;
  }

  $scope.listLangages = ['Français', 'English', 'Español'];
}])
.service('translation', ["$resource", function($resource) {
  this.getTranslation = function($rootScope, language) {
    var languageFilePath = 'translations/' + language + '.json';
      $resource(languageFilePath).get(function (data) {
      $rootScope.TEXT = data;
    });
  };
}])
