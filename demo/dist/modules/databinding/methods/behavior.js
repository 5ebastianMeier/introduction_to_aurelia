'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var customElement, bindable, _dec, _class, _desc, _value, _class2, _descriptor, Behavior;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

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

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      _export('Behavior', Behavior = (_dec = customElement('who-you-gonna-call'), _dec(_class = (_class2 = function () {
        function Behavior() {
          _classCallCheck(this, Behavior);

          _initDefineProp(this, 'onGhost', _descriptor, this);
        }

        Behavior.prototype.ghostAppeared = function ghostAppeared() {
          if (this.onGhost) {
            this.onGhost({
              recipient: 'GHOSTBUSTERS!'
            });
          }
        };

        return Behavior;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onGhost', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('Behavior', Behavior);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0YWJpbmRpbmcvbWV0aG9kcy9iZWhhdmlvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRO0FBQWU7OzswQkFHVixtQkFEWixjQUFjLG9CQUFkO2lCQUNZOzs7Ozs7MkJBSVgseUNBQWdCO0FBQ2QsY0FBSSxLQUFLLE9BQUwsRUFBYztBQUNoQixpQkFBSyxPQUFMLENBQWE7QUFDWCx5QkFBVyxlQUFYO2FBREYsRUFEZ0I7V0FBbEI7OztlQUxTO21GQUVWIiwiZmlsZSI6Im1vZHVsZXMvZGF0YWJpbmRpbmcvbWV0aG9kcy9iZWhhdmlvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
