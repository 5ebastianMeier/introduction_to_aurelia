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

          console.log('constructor');
        }

        Lifecycle.prototype.created = function created(owningView, myView) {
          console.log('created');
          console.log(owningView);
          console.log(myView);
        };

        Lifecycle.prototype.bind = function bind(bindingContext, overrideContext) {
          console.log('bind');
          console.log(bindingContext);
          console.log(overrideContext);
        };

        Lifecycle.prototype.attached = function attached() {
          console.log('attached');
        };

        Lifecycle.prototype.detached = function detached() {
          console.log('detached');
        };

        Lifecycle.prototype.unbind = function unbind() {
          console.log('unbind');
        };

        return Lifecycle;
      }());

      _export('Lifecycle', Lifecycle);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy9saWZlY3ljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7MkJBQWE7QUFDWCxpQkFEVyxTQUNYLEdBQWM7Z0NBREgsV0FDRzs7QUFDWixrQkFBUSxHQUFSLENBQVksYUFBWixFQURZO1NBQWQ7O0FBRFcsNEJBS1gsMkJBQVEsWUFBWSxRQUFRO0FBQzFCLGtCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBRDBCO0FBRTFCLGtCQUFRLEdBQVIsQ0FBWSxVQUFaLEVBRjBCO0FBRzFCLGtCQUFRLEdBQVIsQ0FBWSxNQUFaLEVBSDBCOzs7QUFMakIsNEJBV1gscUJBQUssZ0JBQWdCLGlCQUFpQjtBQUNwQyxrQkFBUSxHQUFSLENBQVksTUFBWixFQURvQztBQUVwQyxrQkFBUSxHQUFSLENBQVksY0FBWixFQUZvQztBQUdwQyxrQkFBUSxHQUFSLENBQVksZUFBWixFQUhvQzs7O0FBWDNCLDRCQWlCWCwrQkFBVztBQUNULGtCQUFRLEdBQVIsQ0FBWSxVQUFaLEVBRFM7OztBQWpCQSw0QkFxQlgsK0JBQVc7QUFDVCxrQkFBUSxHQUFSLENBQVksVUFBWixFQURTOzs7QUFyQkEsNEJBeUJYLDJCQUFTO0FBQ1Asa0JBQVEsR0FBUixDQUFZLFFBQVosRUFETzs7O2VBekJFIiwiZmlsZSI6Im1vZHVsZXMvY29tcG9uZW50cy9saWZlY3ljbGUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
