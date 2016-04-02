'use strict';

System.register([], function (_export, _context) {
  var Routing;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Routing', Routing = function () {
        function Routing() {
          _classCallCheck(this, Routing);
        }

        Routing.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'configuration' }, { route: 'configuration', name: 'configuration', moduleId: 'modules/routing/configuration', nav: true, title: 'Konfiguration' }, { route: 'lifecycle', name: 'lifecycle', moduleId: 'modules/routing/lifecycle', nav: true, title: 'Lifecycle' }, { route: 'view-ports', name: 'view-ports', moduleId: 'modules/routing/view-ports', nav: true, title: 'View Ports' }]);

          this.router = router;
        };

        return Routing;
      }());

      _export('Routing', Routing);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcm91dGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozt5QkFBYTs7Ozs7MEJBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sRUFBUCxFQUFXLFVBQVUsZUFBVixFQURKLEVBRVQsRUFBRSxPQUFPLGVBQVAsRUFBbUMsTUFBTSxlQUFOLEVBQWlDLFVBQVUsK0JBQVYsRUFBcUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxlQUFQLEVBRjdILEVBR1QsRUFBRSxPQUFPLFdBQVAsRUFBK0IsTUFBTSxXQUFOLEVBQTZCLFVBQVUsMkJBQVYsRUFBaUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxXQUFQLEVBSGpILEVBSVQsRUFBRSxPQUFPLFlBQVAsRUFBZ0MsTUFBTSxZQUFOLEVBQThCLFVBQVUsNEJBQVYsRUFBa0QsS0FBSyxJQUFMLEVBQVcsT0FBTyxZQUFQLEVBSnBILENBQVgsRUFGOEI7O0FBUzlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FUOEI7OztlQURyQiIsImZpbGUiOiJtb2R1bGVzL3JvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
