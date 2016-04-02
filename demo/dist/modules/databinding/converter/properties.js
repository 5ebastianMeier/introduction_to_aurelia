'use strict';

System.register([], function (_export, _context) {
  var _typeof, PropertiesValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('PropertiesValueConverter', PropertiesValueConverter = function () {
        function PropertiesValueConverter() {
          _classCallCheck(this, PropertiesValueConverter);
        }

        PropertiesValueConverter.prototype.toView = function toView(obj) {

          var getStats = function getStats(object) {

            var value = void 0;
            var name = void 0;
            var type = typeof object === 'undefined' ? 'undefined' : _typeof(object);

            if (type === 'object') {

              var objectKeys = Object.keys(object);

              value = objectKeys.map(function (objectKey) {

                name = objectKey;

                return getStats(object[objectKey]);
              });
            } else {
              value = object;
            }

            return {
              name: name,
              type: type,
              value: value
            };
          };

          return JSON.stringify(getStats(obj), null, 2);
        };

        return PropertiesValueConverter;
      }());

      _export('PropertiesValueConverter', PropertiesValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0YWJpbmRpbmcvY29udmVydGVyL3Byb3BlcnRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQWE7Ozs7OzJDQUNYLHlCQUFPLEtBQUs7O0FBRVYsY0FBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLE1BQUQsRUFBWTs7QUFFM0IsZ0JBQUksY0FBSixDQUYyQjtBQUczQixnQkFBSSxhQUFKLENBSDJCO0FBSTNCLGdCQUFNLGNBQWMsc0RBQWQsQ0FKcUI7O0FBTTNCLGdCQUFJLFNBQVMsUUFBVCxFQUFtQjs7QUFFckIsa0JBQU0sYUFBYSxPQUFPLElBQVAsQ0FBWSxNQUFaLENBQWIsQ0FGZTs7QUFJckIsc0JBQVEsV0FBVyxHQUFYLENBQWUsVUFBQyxTQUFELEVBQWU7O0FBRXBDLHVCQUFPLFNBQVAsQ0FGb0M7O0FBSXBDLHVCQUFPLFNBQVMsT0FBTyxTQUFQLENBQVQsQ0FBUCxDQUpvQztlQUFmLENBQXZCLENBSnFCO2FBQXZCLE1BV087QUFDTCxzQkFBUSxNQUFSLENBREs7YUFYUDs7QUFlQSxtQkFBTztBQUNMLG9CQUFNLElBQU47QUFDQSxvQkFBTSxJQUFOO0FBQ0EscUJBQU8sS0FBUDthQUhGLENBckIyQjtXQUFaLENBRlA7O0FBOEJWLGlCQUFPLEtBQUssU0FBTCxDQUFlLFNBQVMsR0FBVCxDQUFmLEVBQThCLElBQTlCLEVBQW9DLENBQXBDLENBQVAsQ0E5QlU7OztlQUREIiwiZmlsZSI6Im1vZHVsZXMvZGF0YWJpbmRpbmcvY29udmVydGVyL3Byb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
