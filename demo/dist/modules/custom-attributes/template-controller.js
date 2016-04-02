'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var BoundViewFactory, ViewSlot, customAttribute, templateController, inject, _dec, _dec2, _class2, TemplateController, CookieMonster;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      BoundViewFactory = _aureliaFramework.BoundViewFactory;
      ViewSlot = _aureliaFramework.ViewSlot;
      customAttribute = _aureliaFramework.customAttribute;
      templateController = _aureliaFramework.templateController;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      _export('TemplateController', TemplateController = function () {
        function TemplateController() {
          _classCallCheck(this, TemplateController);

          this.food = 'pizza';
        }

        TemplateController.prototype.attached = function attached() {
          var _this = this;

          setTimeout(function () {
            _this.food = 'cookie';
          }, 3000);
        };

        return TemplateController;
      }());

      _export('TemplateController', TemplateController);

      _export('CookieMonster', CookieMonster = (_dec = customAttribute('cookie-monster'), _dec2 = inject(BoundViewFactory, ViewSlot), _dec(_class2 = templateController(_class2 = _dec2(_class2 = function () {
        function CookieMonster(viewFactory, viewSlot) {
          _classCallCheck(this, CookieMonster);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
        }

        CookieMonster.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue === 'cookie') {
            var view = this.viewFactory.create();
            this.viewSlot.add(view);
          } else {
            this.viewSlot.removeAll();
          }
        };

        return CookieMonster;
      }()) || _class2) || _class2) || _class2));

      _export('CookieMonster', CookieMonster);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY3VzdG9tLWF0dHJpYnV0ZXMvdGVtcGxhdGUtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7QUFBa0I7QUFBVTtBQUFpQjtBQUFvQjs7O29DQUU1RDs7OztlQUNYLE9BQU87OztBQURJLHFDQUdYLCtCQUFXOzs7QUFDVCxxQkFBVyxZQUFNO0FBQ2Ysa0JBQUssSUFBTCxHQUFZLFFBQVosQ0FEZTtXQUFOLEVBRVIsSUFGSCxFQURTOzs7ZUFIQTs7Ozs7K0JBZ0JBLHdCQUhaLGdCQUFnQixnQkFBaEIsV0FFQSxPQUFPLGdCQUFQLEVBQXlCLFFBQXpCLGtCQURBO0FBR0MsaUJBRFcsYUFDWCxDQUFZLFdBQVosRUFBeUIsUUFBekIsRUFBbUM7Z0NBRHhCLGVBQ3dCOztBQUNqQyxlQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FEaUM7QUFFakMsZUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRmlDO1NBQW5DOztBQURXLGdDQU1YLHFDQUFhLFVBQVU7QUFDckIsY0FBSSxhQUFhLFFBQWIsRUFBdUI7QUFDekIsZ0JBQUksT0FBTyxLQUFLLFdBQUwsQ0FBaUIsTUFBakIsRUFBUCxDQURxQjtBQUV6QixpQkFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixJQUFsQixFQUZ5QjtXQUEzQixNQUdPO0FBQ0wsaUJBQUssUUFBTCxDQUFjLFNBQWQsR0FESztXQUhQOzs7ZUFQUyIsImZpbGUiOiJtb2R1bGVzL2N1c3RvbS1hdHRyaWJ1dGVzL3RlbXBsYXRlLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
