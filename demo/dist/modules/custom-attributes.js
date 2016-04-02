'use strict';

System.register([], function (_export, _context) {
  var CustomAttributes;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('CustomAttributes', CustomAttributes = function () {
        function CustomAttributes() {
          _classCallCheck(this, CustomAttributes);
        }

        CustomAttributes.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'declaration' }, { route: 'declaration', name: 'declaration', moduleId: 'modules/custom-attributes/declaration', nav: true, title: 'Deklaration' }, { route: 'options', name: 'options', moduleId: 'modules/custom-attributes/options', nav: true, title: 'Optionen' }, { route: 'template-controller', name: 'template-controller', moduleId: 'modules/custom-attributes/template-controller', nav: true, title: 'Template Controller' }]);

          this.router = router;
        };

        return CustomAttributes;
      }());

      _export('CustomAttributes', CustomAttributes);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWF0dHJpYnV0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0NBQWE7Ozs7O21DQUNYLDJDQUFnQixRQUFRLFFBQVE7QUFDOUIsaUJBQU8sS0FBUCxHQUFlLFNBQWYsQ0FEOEI7QUFFOUIsaUJBQU8sR0FBUCxDQUFXLENBQ1QsRUFBRSxPQUFPLEVBQVAsRUFBVyxVQUFVLGFBQVYsRUFESixFQUVULEVBQUUsT0FBTyxhQUFQLEVBQWlDLE1BQU0sYUFBTixFQUErQixVQUFVLHVDQUFWLEVBQTZELEtBQUssSUFBTCxFQUFXLE9BQU8sYUFBUCxFQUZqSSxFQUdULEVBQUUsT0FBTyxTQUFQLEVBQTZCLE1BQU0sU0FBTixFQUEyQixVQUFVLG1DQUFWLEVBQXlELEtBQUssSUFBTCxFQUFXLE9BQU8sVUFBUCxFQUhySCxFQUlULEVBQUUsT0FBTyxxQkFBUCxFQUF5QyxNQUFNLHFCQUFOLEVBQXVDLFVBQVUsK0NBQVYsRUFBcUUsS0FBSyxJQUFMLEVBQVcsT0FBTyxxQkFBUCxFQUp6SixDQUFYLEVBRjhCOztBQVM5QixlQUFLLE1BQUwsR0FBYyxNQUFkLENBVDhCOzs7ZUFEckIiLCJmaWxlIjoibW9kdWxlcy9jdXN0b20tYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
