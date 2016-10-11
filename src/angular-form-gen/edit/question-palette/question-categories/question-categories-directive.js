fg.directive('fgEditQuestionPaletteCategories', function () {
  return {
    templateUrl: 'angular-form-gen/edit/question-palette/question-categories/question-categories.ng.html',
    require: '^fgEditQuestionPalette',
    controller: 'fgEditQuestionPaletteCategoriesController'
  };
});