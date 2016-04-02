'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var transient, _dec, _class, Example;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      transient = _aureliaFramework.transient;
    }],
    execute: function () {
      _export('Example', Example = (_dec = transient(), _dec(_class = function () {
        function Example() {
          _classCallCheck(this, Example);

          alert('created');
        }

        Example.prototype.checkIfLoaded = function checkIfLoaded() {
          alert('called');
        };

        return Example;
      }()) || _class));

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vcmVzb2x2ZXJzL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFROzs7eUJBR0ssa0JBRFo7QUFFQyxpQkFEVyxPQUNYLEdBQWM7Z0NBREgsU0FDRzs7QUFDWixnQkFBTSxTQUFOLEVBRFk7U0FBZDs7QUFEVywwQkFLWCx5Q0FBZ0I7QUFDZCxnQkFBTSxRQUFOLEVBRGM7OztlQUxMIiwiZmlsZSI6Im1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vcmVzb2x2ZXJzL2V4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
