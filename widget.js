var widgets = angular.module('-.widgets');

widgets.directive('dashLinker',
  ['$io'
  , function ($io){
    var dirObj = {
      // Can be both an attribute and an element
      // I'd rather it'd be an element thou
      restrict: 'EA',
      
      link: function postLink(scope, iElement, iAttrs) {
        $io.$on(iAttrs.listenTo, function (data) {
          scope[ iAttrs.linkTo || 'data' ] = data;
        });
      }
    };
    return dirObj;
  }]);