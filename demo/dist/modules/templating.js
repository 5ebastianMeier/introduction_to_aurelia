'use strict';

System.register([], function (_export, _context) {
  var Templating;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Templating', Templating = function () {
        function Templating() {
          _classCallCheck(this, Templating);
        }

        Templating.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'require' }, { route: 'require', name: 'require', moduleId: 'modules/templating/require', nav: true, title: 'Templates' }, { route: 'repeater', name: 'repeater', moduleId: 'modules/templating/repeater', nav: true, title: 'Repeater' }, { route: 'conditions', name: 'conditions', moduleId: 'modules/templating/conditions', nav: true, title: 'Bedingungen' }, { route: 'composition', name: 'composition', moduleId: 'modules/templating/composition', nav: true, title: 'Komposition' }]);

          this.router = router;
        };

        return Templating;
      }());

      _export('Templating', Templating);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGVtcGxhdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs0QkFBYTs7Ozs7NkJBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sRUFBUCxFQUFXLFVBQVUsU0FBVixFQURKLEVBRVQsRUFBRSxPQUFPLFNBQVAsRUFBNkIsTUFBTSxTQUFOLEVBQTJCLFVBQVUsNEJBQVYsRUFBa0QsS0FBSyxJQUFMLEVBQVcsT0FBTyxXQUFQLEVBRjlHLEVBR1QsRUFBRSxPQUFPLFVBQVAsRUFBOEIsTUFBTSxVQUFOLEVBQTRCLFVBQVUsNkJBQVYsRUFBbUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxVQUFQLEVBSGpILEVBSVQsRUFBRSxPQUFPLFlBQVAsRUFBZ0MsTUFBTSxZQUFOLEVBQThCLFVBQVUsK0JBQVYsRUFBcUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxhQUFQLEVBSnZILEVBS1QsRUFBRSxPQUFPLGFBQVAsRUFBaUMsTUFBTSxhQUFOLEVBQStCLFVBQVUsZ0NBQVYsRUFBc0QsS0FBSyxJQUFMLEVBQVcsT0FBTyxhQUFQLEVBTDFILENBQVgsRUFGOEI7O0FBVTlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FWOEI7OztlQURyQiIsImZpbGUiOiJtb2R1bGVzL3RlbXBsYXRpbmcuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
