'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var inject, customAttribute, DOM, bindable, dynamicOptions, _dec, _class2, _desc, _value, _class3, _descriptor, _descriptor2, Options, MyAttribute;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      DOM = _aureliaFramework.DOM;
      bindable = _aureliaFramework.bindable;
      dynamicOptions = _aureliaFramework.dynamicOptions;
    }],
    execute: function () {
      _export('Options', Options = function () {
        function Options() {
          _classCallCheck(this, Options);

          this.einText = 'das beispiel';
        }

        Options.prototype.attached = function attached() {
          var _this = this;

          setTimeout(function () {
            _this.einText = 'funktioniert';
          }, 2000);
        };

        return Options;
      }());

      _export('Options', Options);

      _export('MyAttribute', MyAttribute = (_dec = customAttribute('ein-anderes-attribut'), _dec(_class2 = (_class3 = function () {
        function MyAttribute() {
          _classCallCheck(this, MyAttribute);

          _initDefineProp(this, 'irgendeinText', _descriptor, this);

          _initDefineProp(this, 'anderes', _descriptor2, this);
        }

        MyAttribute.prototype.irgendeinTextChanged = function irgendeinTextChanged(newValue, oldValue) {
          console.log(newValue);
        };

        MyAttribute.prototype.anderesChanged = function anderesChanged(newValue, oldValue) {
          console.log(newValue);
        };

        return MyAttribute;
      }(), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'irgendeinText', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'anderes', [bindable], {
        enumerable: true,
        initializer: null
      })), _class3)) || _class2));

      _export('MyAttribute', MyAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWF0dHJpYnV0ZXMvb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRO0FBQVE7QUFBaUI7QUFBSztBQUFVOzs7eUJBRW5DOzs7O2VBQ1gsVUFBVTs7O0FBREMsMEJBR1gsK0JBQVc7OztBQUNULHFCQUFXLFlBQU07QUFDZixrQkFBSyxPQUFMLEdBQWUsY0FBZixDQURlO1dBQU4sRUFFUixJQUZILEVBRFM7OztlQUhBOzs7Ozs2QkFXQSxzQkFEWixnQkFBZ0Isc0JBQWhCO2lCQUNZOzs7Ozs7Ozs4QkFJWCxxREFBcUIsVUFBVSxVQUFVO0FBQUUsa0JBQVEsR0FBUixDQUFZLFFBQVosRUFBRjs7O0FBSjlCLDhCQU1YLHlDQUFlLFVBQVUsVUFBVTtBQUFFLGtCQUFRLEdBQVIsQ0FBWSxRQUFaLEVBQUY7OztlQU54Qjt5RkFDVjs7O2tGQUNBIiwiZmlsZSI6Im1vZHVsZXMvY3VzdG9tLWF0dHJpYnV0ZXMvb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
