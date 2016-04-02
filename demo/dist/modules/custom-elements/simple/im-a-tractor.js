'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var customElement, bindable, _dec, _class, _desc, _value, _class2, _descriptor, ImATractor;

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
      _export('ImATractor', ImATractor = (_dec = customElement('im-a-tractor'), _dec(_class = (_class2 = function () {
        function ImATractor() {
          _classCallCheck(this, ImATractor);

          _initDefineProp(this, 'fuel', _descriptor, this);
        }

        ImATractor.prototype.drive = function drive() {
          if (this.fuel === 'diesel') {
            alert('vroom vroom');
          }
        };

        return ImATractor;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'fuel', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('ImATractor', ImATractor);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWVsZW1lbnRzL3NpbXBsZS9pbS1hLXRyYWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUTtBQUFlOzs7NEJBR1YscUJBRFosY0FBYyxjQUFkO2lCQUNZOzs7Ozs7NkJBR1gseUJBQVE7QUFDTixjQUFJLEtBQUssSUFBTCxLQUFjLFFBQWQsRUFBd0I7QUFDMUIsa0JBQU0sYUFBTixFQUQwQjtXQUE1Qjs7O2VBSlM7Z0ZBQ1YiLCJmaWxlIjoibW9kdWxlcy9jdXN0b20tZWxlbWVudHMvc2ltcGxlL2ltLWEtdHJhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
