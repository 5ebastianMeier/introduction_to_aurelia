'use strict';

System.register(['aurelia-router'], function (_export, _context) {
  var Redirect, App, AuthorizeStep;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.addPipelineStep('authorize', AuthorizeStep);
          config.map([{ route: '', redirect: 'components' }, { route: 'components', name: 'components', moduleId: 'modules/components', nav: true, title: 'Komponenten' }, { route: 'custom-attributes', name: 'custom-attributes', moduleId: 'modules/custom-attributes', nav: true, title: 'Custom Attributes' }, { route: 'custom-elements', name: 'custom-elements', moduleId: 'modules/custom-elements', nav: true, title: 'Custom Elements' }, { route: 'databinding', name: 'databinding', moduleId: 'modules/databinding', nav: true, title: 'Databinding' }, { route: 'dependency-injection', name: 'dependency-injection', moduleId: 'modules/dependency-injection', nav: true, title: 'Dependency Injection' }, { route: 'event-aggregator', name: 'event-aggregator', moduleId: 'modules/event-aggregator', nav: true, title: 'Event-Aggregator' }, { route: 'routing', name: 'routing', moduleId: 'modules/routing', nav: true, title: 'Routing', auth: true }, { route: 'templating', name: 'templating', moduleId: 'modules/templating', nav: true, title: 'Templating' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);

      AuthorizeStep = function () {
        function AuthorizeStep() {
          _classCallCheck(this, AuthorizeStep);
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {
          if (navigationInstruction.getAllInstructions().some(function (i) {
            return i.config.auth;
          })) {
            var isLoggedIn = true;
            if (!isLoggedIn) {
              return next.cancel(new Redirect(''));
            }
          }

          return next();
        };

        return AuthorizeStep;
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7OztxQkFFSzs7Ozs7c0JBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DLGFBQXBDLEVBRjhCO0FBRzlCLGlCQUFPLEdBQVAsQ0FBVyxDQUNULEVBQUUsT0FBTyxFQUFQLEVBQVcsVUFBVSxZQUFWLEVBREosRUFFVCxFQUFFLE9BQU8sWUFBUCxFQUFnQyxNQUFNLFlBQU4sRUFBOEIsVUFBVSxvQkFBVixFQUEwQyxLQUFLLElBQUwsRUFBVyxPQUFPLGFBQVAsRUFGNUcsRUFHVCxFQUFFLE9BQU8sbUJBQVAsRUFBZ0MsTUFBTSxtQkFBTixFQUE4QixVQUFVLDJCQUFWLEVBQTBDLEtBQUssSUFBTCxFQUFXLE9BQU8sbUJBQVAsRUFINUcsRUFJVCxFQUFFLE9BQU8saUJBQVAsRUFBZ0MsTUFBTSxpQkFBTixFQUE4QixVQUFVLHlCQUFWLEVBQTBDLEtBQUssSUFBTCxFQUFXLE9BQU8saUJBQVAsRUFKNUcsRUFLVCxFQUFFLE9BQU8sYUFBUCxFQUFnQyxNQUFNLGFBQU4sRUFBOEIsVUFBVSxxQkFBVixFQUEwQyxLQUFLLElBQUwsRUFBVyxPQUFPLGFBQVAsRUFMNUcsRUFNVCxFQUFFLE9BQU8sc0JBQVAsRUFBZ0MsTUFBTSxzQkFBTixFQUE4QixVQUFVLDhCQUFWLEVBQTBDLEtBQUssSUFBTCxFQUFXLE9BQU8sc0JBQVAsRUFONUcsRUFPVCxFQUFFLE9BQU8sa0JBQVAsRUFBZ0MsTUFBTSxrQkFBTixFQUE4QixVQUFVLDBCQUFWLEVBQTBDLEtBQUssSUFBTCxFQUFXLE9BQU8sa0JBQVAsRUFQNUcsRUFRVCxFQUFFLE9BQU8sU0FBUCxFQUFnQyxNQUFNLFNBQU4sRUFBOEIsVUFBVSxpQkFBVixFQUEwQyxLQUFLLElBQUwsRUFBVyxPQUFPLFNBQVAsRUFBa0IsTUFBTSxJQUFOLEVBUjlILEVBU1QsRUFBRSxPQUFPLFlBQVAsRUFBZ0MsTUFBTSxZQUFOLEVBQThCLFVBQVUsb0JBQVYsRUFBMEMsS0FBSyxJQUFMLEVBQVcsT0FBTyxZQUFQLEVBVDVHLENBQVgsRUFIOEI7O0FBZTlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FmOEI7OztlQURyQjs7Ozs7QUFvQlA7Ozs7O2dDQUNKLG1CQUFJLHVCQUF1QixNQUFNO0FBQy9CLGNBQUksc0JBQXNCLGtCQUF0QixHQUEyQyxJQUEzQyxDQUFnRDttQkFBSyxFQUFFLE1BQUYsQ0FBUyxJQUFUO1dBQUwsQ0FBcEQsRUFBeUU7QUFDdkUsZ0JBQUksYUFBYSxJQUFiLENBRG1FO0FBRXZFLGdCQUFJLENBQUMsVUFBRCxFQUFhO0FBQ2YscUJBQU8sS0FBSyxNQUFMLENBQVksSUFBSSxRQUFKLENBQWEsRUFBYixDQUFaLENBQVAsQ0FEZTthQUFqQjtXQUZGOztBQU9BLGlCQUFPLE1BQVAsQ0FSK0I7OztlQUQ3QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
