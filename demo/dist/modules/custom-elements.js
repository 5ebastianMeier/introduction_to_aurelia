'use strict';

System.register([], function (_export, _context) {
  var CustomElements;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('CustomElements', CustomElements = function () {
        function CustomElements() {
          _classCallCheck(this, CustomElements);
        }

        CustomElements.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'simple' }, { route: 'simple', name: 'simple', moduleId: 'modules/custom-elements/simple', nav: true, title: 'Simples Custom Element' }, { route: 'svg', name: 'svg', moduleId: 'modules/custom-elements/svg-example', nav: true, title: 'Svg' }, { route: 'replacements', name: 'replacements', moduleId: 'modules/custom-elements/replacements', nav: true, title: 'Replacements' }, { route: 'surrogates', name: 'surrogates', moduleId: 'modules/custom-elements/surrogates', nav: true, title: 'Surrogates' }]);

          this.router = router;
        };

        return CustomElements;
      }());

      _export('CustomElements', CustomElements);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2dDQUFhOzs7OztpQ0FDWCwyQ0FBZ0IsUUFBUSxRQUFRO0FBQzlCLGlCQUFPLEtBQVAsR0FBZSxTQUFmLENBRDhCO0FBRTlCLGlCQUFPLEdBQVAsQ0FBVyxDQUNULEVBQUUsT0FBTyxFQUFQLEVBQVcsVUFBVSxRQUFWLEVBREosRUFFVCxFQUFFLE9BQU8sUUFBUCxFQUE0QixNQUFNLFFBQU4sRUFBMEIsVUFBVSxnQ0FBVixFQUFzRCxLQUFLLElBQUwsRUFBVyxPQUFPLHdCQUFQLEVBRmhILEVBR1QsRUFBRSxPQUFPLEtBQVAsRUFBeUIsTUFBTSxLQUFOLEVBQXVCLFVBQVUscUNBQVYsRUFBMkQsS0FBSyxJQUFMLEVBQVcsT0FBTyxLQUFQLEVBSC9HLEVBSVQsRUFBRSxPQUFPLGNBQVAsRUFBa0MsTUFBTSxjQUFOLEVBQWdDLFVBQVUsc0NBQVYsRUFBNEQsS0FBSyxJQUFMLEVBQVcsT0FBTyxjQUFQLEVBSmxJLEVBS1QsRUFBRSxPQUFPLFlBQVAsRUFBZ0MsTUFBTSxZQUFOLEVBQThCLFVBQVUsb0NBQVYsRUFBMEQsS0FBSyxJQUFMLEVBQVcsT0FBTyxZQUFQLEVBTDVILENBQVgsRUFGOEI7O0FBVTlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FWOEI7OztlQURyQiIsImZpbGUiOiJtb2R1bGVzL2N1c3RvbS1lbGVtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
