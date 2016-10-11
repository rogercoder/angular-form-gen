fg.controller('fgEditQuestionPaletteController', function ($scope, fgConfig) {

  $scope.questions = [];

  var fakeTempl1 = {};

  fakeTempl1.name = 'Fake1';
  fakeTempl1.displayName = 'Fake 1';
  fakeTempl1.type = 'text';

  $scope.questions.push(fakeTempl1);
  
  // var tmpls = fgConfig.fields.templates;
  // var i = tmpls.length;
  //
  // while(i--) {
  //   var tmpl = tmpls[i];
  //
  //   if(tmpl.editor && tmpl.editor.visible == false) {
  //     continue;
  //   }
  //
  //   $scope.questions.unshift(angular.copy(tmpl));
  // }

});