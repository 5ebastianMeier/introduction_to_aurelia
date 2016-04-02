'use strict';

System.register([], function (_export, _context) {
  var ViewPorts;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ViewPorts', ViewPorts = function () {
        function ViewPorts() {
          _classCallCheck(this, ViewPorts);
        }

        ViewPorts.prototype.configureRouter = function configureRouter(config) {
          config.map([{
            route: '',
            viewPorts: {
              portOne: {
                moduleId: 'modules/routing/view-ports/eins'
              },
              portTwo: {
                moduleId: 'modules/routing/view-ports/zwei'
              }
            }
          }]);
        };

        return ViewPorts;
      }());

      _export('ViewPorts', ViewPorts);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcm91dGluZy92aWV3LXBvcnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzJCQUFhOzs7Ozs0QkFDWCwyQ0FBZ0IsUUFBUTtBQUN0QixpQkFBTyxHQUFQLENBQVcsQ0FBQztBQUNWLG1CQUFPLEVBQVA7QUFDQSx1QkFBVztBQUNULHVCQUFTO0FBQ1AsMEJBQVUsaUNBQVY7ZUFERjtBQUdBLHVCQUFTO0FBQ1AsMEJBQVUsaUNBQVY7ZUFERjthQUpGO1dBRlMsQ0FBWCxFQURzQjs7O2VBRGIiLCJmaWxlIjoibW9kdWxlcy9yb3V0aW5nL3ZpZXctcG9ydHMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
