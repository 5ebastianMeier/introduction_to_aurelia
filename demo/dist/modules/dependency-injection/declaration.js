'use strict';

System.register(['aurelia-framework', './declaration/first-class', './declaration/second-class'], function (_export, _context) {
  var inject, Class1, Class2, _dec, _class, Declaration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_declarationFirstClass) {
      Class1 = _declarationFirstClass.Class1;
    }, function (_declarationSecondClass) {
      Class2 = _declarationSecondClass.Class2;
    }],
    execute: function () {
      _export('Declaration', Declaration = (_dec = inject(Class1, Class2), _dec(_class = function Declaration(class1, class2) {
        _classCallCheck(this, Declaration);

        this.class1 = class1;
        this.class2 = class2;
      }) || _class));

      _export('Declaration', Declaration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vZGVjbGFyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFROztBQUNBOztBQUNBOzs7NkJBR0ssc0JBRFosT0FBTyxNQUFQLEVBQWUsTUFBZixpQkFFQyxTQURXLFdBQ1gsQ0FBWSxNQUFaLEVBQW9CLE1BQXBCLEVBQTRCOzhCQURqQixhQUNpQjs7QUFDMUIsYUFBSyxNQUFMLEdBQWMsTUFBZCxDQUQwQjtBQUUxQixhQUFLLE1BQUwsR0FBYyxNQUFkLENBRjBCO09BQTVCIiwiZmlsZSI6Im1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vZGVjbGFyYXRpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
