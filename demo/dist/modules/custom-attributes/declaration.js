'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var inject, customAttribute, DOM, _dec, _dec2, _class2, Declaration, SampleAttribute;

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
    }],
    execute: function () {
      _export('Declaration', Declaration = function () {
        function Declaration() {
          _classCallCheck(this, Declaration);

          this.testWert = 'das beispiel';
        }

        Declaration.prototype.attached = function attached() {
          var _this = this;

          setTimeout(function () {
            _this.testWert = 'funktioniert';
          }, 3000);
        };

        return Declaration;
      }());

      _export('Declaration', Declaration);

      _export('SampleAttribute', SampleAttribute = (_dec = customAttribute('irgendein-attribut'), _dec2 = inject(DOM.Element), _dec(_class2 = _dec2(_class2 = function () {
        function SampleAttribute(element) {
          _classCallCheck(this, SampleAttribute);

          this.element = element;
        }

        SampleAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          this.element.textContent = newValue;
        };

        return SampleAttribute;
      }()) || _class2) || _class2));

      _export('SampleAttribute', SampleAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWF0dHJpYnV0ZXMvZGVjbGFyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRO0FBQVE7QUFBaUI7Ozs2QkFFcEI7Ozs7ZUFDWCxXQUFXOzs7QUFEQSw4QkFHWCwrQkFBVzs7O0FBQ1QscUJBQVcsWUFBTTtBQUNmLGtCQUFLLFFBQUwsR0FBZ0IsY0FBaEIsQ0FEZTtXQUFOLEVBRVIsSUFGSCxFQURTOzs7ZUFIQTs7Ozs7aUNBWUEsMEJBRlosZ0JBQWdCLG9CQUFoQixXQUNBLE9BQU8sSUFBSSxPQUFKO0FBRU4saUJBRFcsZUFDWCxDQUFZLE9BQVosRUFBcUI7Z0NBRFYsaUJBQ1U7O0FBQ25CLGVBQUssT0FBTCxHQUFlLE9BQWYsQ0FEbUI7U0FBckI7O0FBRFcsa0NBSVgscUNBQWEsVUFBVSxVQUFVO0FBQy9CLGVBQUssT0FBTCxDQUFhLFdBQWIsR0FBMkIsUUFBM0IsQ0FEK0I7OztlQUp0QiIsImZpbGUiOiJtb2R1bGVzL2N1c3RvbS1hdHRyaWJ1dGVzL2RlY2xhcmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
