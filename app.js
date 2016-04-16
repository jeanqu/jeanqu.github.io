var myApp = angular.module('myApp', ['ngResource']);
/*
}]);*/


myApp.controller('MainCtrl', ['$rootScope', '$scope', 'translation', function ($rootScope, $scope, translation) {
  translation.getTranslation($rootScope, 'en');

  $scope.showPhoto = false;

  $scope.changeLangage = function(langage) {
    if(langage == 'en')
    {
      $scope.showPhoto = false;
    }
    else
    {
      $scope.showPhoto = true;
    }

    translation.getTranslation($rootScope, langage);
  };

  $scope.listLangages = ['fr', 'en'];
}])
.service('translation', ["$resource", function($resource) {
  this.getTranslation = function($rootScope, language) {
    var languageFilePath = 'translations/' + language + '.json';
      $resource(languageFilePath).get(function (data) {
      $rootScope.TEXT = data;
    });
  };
}])
