fg.controller('fgEditQuestionPaletteCategoriesController', function($scope, fgConfig) {

  $scope.questionCategories = fgConfig.fields.categories;

  $scope.setQuestionCategory = function(name, category) {
    $scope.questionCategoryName = name;
    $scope.questionCategory = category;
  };

  if(!$scope.questionCategory) {
    //noinspection LoopStatementThatDoesntLoopJS
    for (var name in $scope.questionCategories) {
      //noinspection JSUnfilteredForInLoop
      $scope.setQuestionCategory(name, $scope.categories[name]);
      break;
    }
  }
});