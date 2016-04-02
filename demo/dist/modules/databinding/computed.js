'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var computedFrom, _createClass, _dec, _desc, _value, _class, Computed;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Computed', Computed = (_dec = computedFrom('firstString', 'secondString'), (_class = function () {
        function Computed() {
          _classCallCheck(this, Computed);

          this.firstString = 'this is a';
          this.secondString = 'string';
        }

        _createClass(Computed, [{
          key: 'boundString',
          get: function get() {
            return this.firstString + ' ' + this.secondString;
          }
        }]);

        return Computed;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'boundString', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'boundString'), _class.prototype)), _class)));

      _export('Computed', Computed);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0YWJpbmRpbmcvY29tcHV0ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFSyxtQkFJVixhQUFhLGFBQWIsRUFBNEIsY0FBNUI7aUJBSlU7OztlQUNYLGNBQWM7ZUFDZCxlQUFlOzs7cUJBRko7OzhCQUtPO0FBQ2hCLG1CQUFVLEtBQUssV0FBTCxTQUFvQixLQUFLLFlBQUwsQ0FEZDs7OztlQUxQIiwiZmlsZSI6Im1vZHVsZXMvZGF0YWJpbmRpbmcvY29tcHV0ZWQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
