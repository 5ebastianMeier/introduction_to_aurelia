'use strict';

System.register(['aurelia-framework', './resolvers/example'], function (_export, _context) {
  var inject, Example, _dec, _class, Explicit;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_resolversExample) {
      Example = _resolversExample.Example;
    }],
    execute: function () {
      _export('Explicit', Explicit = (_dec = inject(Example, Example), _dec(_class = function () {
        function Explicit(example1, example2) {
          _classCallCheck(this, Explicit);

          this.example1 = example1;
          this.example2 = example2;
        }

        Explicit.prototype.compareDependencies = function compareDependencies() {
          alert('1 === 2: ' + (this.example1 === this.example2));
        };

        return Explicit;
      }()) || _class));

      _export('Explicit', Explicit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24vZXhwbGljaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFROztBQUNBOzs7MEJBR0ssbUJBRFosT0FBTyxPQUFQLEVBQWdCLE9BQWhCO0FBRUMsaUJBRFcsUUFDWCxDQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0M7Z0NBRHJCLFVBQ3FCOztBQUM5QixlQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FEOEI7QUFFOUIsZUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRjhCO1NBQWhDOztBQURXLDJCQU1YLHFEQUFzQjtBQUNwQiwrQkFBa0IsS0FBSyxRQUFMLEtBQWtCLEtBQUssUUFBTCxDQUFwQyxFQURvQjs7O2VBTlgiLCJmaWxlIjoibW9kdWxlcy9kZXBlbmRlbmN5LWluamVjdGlvbi9leHBsaWNpdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
