fg.directive('fgEditQuestionPalette',function () {
  return {
    require: ['^fgSchema'],
    templateUrl: 'angular-form-gen/edit/question-palette/question-palette.ng.html',
    controller: 'fgEditQuestionPaletteController',
    link: function($scope, $element, $attrs, ctrls) {
      $scope.schemaCtrl = ctrls[0];
    }
  };
});