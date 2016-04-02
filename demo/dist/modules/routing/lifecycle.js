'use strict';

System.register([], function (_export, _context) {
  var Lifecycle;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Lifecycle', Lifecycle = function () {
        function Lifecycle() {
          _classCallCheck(this, Lifecycle);
        }

        Lifecycle.prototype.canActivate = function canActivate(params, routeConfig, navigationInstruction) {
          console.log('canActivate');
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve();
            }, 2000);
          });
        };

        Lifecycle.prototype.activate = function activate(params, routeConfig, navigationInstruction) {
          console.log('activate');

          setTimeout(function () {
            routeConfig.navModel.setTitle('Custom Title (Lifecycle)');
          }, 2000);
        };

        Lifecycle.prototype.canDeactivate = function canDeactivate() {
          console.log('canDeactivate');
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve();
            }, 2000);
          });
        };

        Lifecycle.prototype.deactivate = function deactivate() {
          console.log('deactivate ');
        };

        return Lifecycle;
      }());

      _export('Lifecycle', Lifecycle);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcm91dGluZy9saWZlY3ljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7MkJBQWE7Ozs7OzRCQUNYLG1DQUFZLFFBQVEsYUFBYSx1QkFBdUI7QUFDdEQsa0JBQVEsR0FBUixDQUFZLGFBQVosRUFEc0Q7QUFFdEQsaUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0Qyx1QkFBVyxZQUFNO0FBQ2Ysd0JBRGU7YUFBTixFQUVSLElBRkgsRUFEc0M7V0FBckIsQ0FBbkIsQ0FGc0Q7OztBQUQ3Qyw0QkFVWCw2QkFBUyxRQUFRLGFBQWEsdUJBQXVCO0FBQ25ELGtCQUFRLEdBQVIsQ0FBWSxVQUFaLEVBRG1EOztBQUduRCxxQkFBVyxZQUFNO0FBQ2Ysd0JBQVksUUFBWixDQUFxQixRQUFyQixDQUE4QiwwQkFBOUIsRUFEZTtXQUFOLEVBRVIsSUFGSCxFQUhtRDs7O0FBVjFDLDRCQWtCWCx5Q0FBZ0I7QUFDZCxrQkFBUSxHQUFSLENBQVksZUFBWixFQURjO0FBRWQsaUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0Qyx1QkFBVyxZQUFNO0FBQ2Ysd0JBRGU7YUFBTixFQUVSLElBRkgsRUFEc0M7V0FBckIsQ0FBbkIsQ0FGYzs7O0FBbEJMLDRCQTJCWCxtQ0FBYTtBQUNYLGtCQUFRLEdBQVIsQ0FBWSxhQUFaLEVBRFc7OztlQTNCRiIsImZpbGUiOiJtb2R1bGVzL3JvdXRpbmcvbGlmZWN5Y2xlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
