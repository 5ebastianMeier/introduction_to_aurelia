'use strict';

System.register([], function (_export, _context) {
  var Configuration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Configuration', Configuration = function () {
        function Configuration() {
          _classCallCheck(this, Configuration);

          this.routeTest = 'test1';
        }

        Configuration.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', name: 'examples', moduleId: 'modules/routing/example/index', title: 'Beispiele' }, { route: ':id', name: 'exampleDetail1', moduleId: 'modules/routing/example/detail', title: 'Beispieldetails' }, { route: 'examples/:id/', name: 'exampleDetail2', moduleId: 'modules/routing/example/detail', title: 'Beispieldetails' }, { route: ':id/:more/:evenMore', name: 'exampleDetail2', moduleId: 'modules/routing/example/detail', title: 'Beispieldetails' }]);

          this.router = router;
        };

        return Configuration;
      }());

      _export('Configuration', Configuration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcm91dGluZy9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytCQUFhOzs7O2VBQ1gsWUFBWTs7O0FBREQsZ0NBRVgsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sRUFBUCxFQUFzQixNQUFNLFVBQU4sRUFBNEIsVUFBVSwrQkFBVixFQUE0QyxPQUFPLFdBQVAsRUFEdkYsRUFFVCxFQUFFLE9BQU8sS0FBUCxFQUF5QixNQUFNLGdCQUFOLEVBQWtDLFVBQVUsZ0NBQVYsRUFBaUQsT0FBTyxpQkFBUCxFQUZyRyxFQUdULEVBQUUsT0FBTyxlQUFQLEVBQW1DLE1BQU0sZ0JBQU4sRUFBa0MsVUFBVSxnQ0FBVixFQUFpRCxPQUFPLGlCQUFQLEVBSC9HLEVBSVQsRUFBRSxPQUFPLHFCQUFQLEVBQXlDLE1BQU0sZ0JBQU4sRUFBa0MsVUFBVSxnQ0FBVixFQUFpRCxPQUFPLGlCQUFQLEVBSnJILENBQVgsRUFGOEI7O0FBUzlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FUOEI7OztlQUZyQiIsImZpbGUiOiJtb2R1bGVzL3JvdXRpbmcvY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
