'use strict';

System.register(['aurelia-framework', './resolvers/example'], function (_export, _context) {
  var Lazy, inject, Example, _dec, _class, Resolvers;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Lazy = _aureliaFramework.Lazy;
      inject = _aureliaFramework.inject;
    }, function (_resolversExample) {
      Example = _resolversExample.Example;
    }],
    execute: function () {
      _export('Resolvers', Resolvers = (_dec = inject(Lazy.of(Example)), _dec(_class = function () {
        function Resolvers(example) {
          _classCallCheck(this, Resolvers);

          this.example = example;
        }

        Resolvers.prototype.doStuff = function doStuff() {
          this.example().checkIfLoaded();
        };

        return Resolvers;
      }()) || _class));

      _export('Resolvers', Resolvers);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vcmVzb2x2ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUTtBQUFNOztBQUNOOzs7MkJBR0ssb0JBRFosT0FBTyxLQUFLLEVBQUwsQ0FBUSxPQUFSLENBQVA7QUFFQyxpQkFEVyxTQUNYLENBQVksT0FBWixFQUFxQjtnQ0FEVixXQUNVOztBQUNuQixlQUFLLE9BQUwsR0FBZSxPQUFmLENBRG1CO1NBQXJCOztBQURXLDRCQUtYLDZCQUFVO0FBQ1IsZUFBSyxPQUFMLEdBQWUsYUFBZixHQURROzs7ZUFMQyIsImZpbGUiOiJtb2R1bGVzL2RlcGVuZGVuY3ktaW5qZWN0aW9uL3Jlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
