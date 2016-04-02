'use strict';

System.register([], function (_export, _context) {
  var DependencyInjection;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('DependencyInjection', DependencyInjection = function () {
        function DependencyInjection() {
          _classCallCheck(this, DependencyInjection);
        }

        DependencyInjection.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'declaration' }, { route: 'declaration', name: 'declaration', moduleId: 'modules/dependency-injection/declaration', nav: true, title: 'Deklaration' }, { route: 'explicit', name: 'explicit', moduleId: 'modules/dependency-injection/explicit', nav: true, title: 'Explizite Deklaration' }, { route: 'resolvers', name: 'resolvers', moduleId: 'modules/dependency-injection/resolvers', nav: true, title: 'Resolver' }]);

          this.router = router;
        };

        return DependencyInjection;
      }());

      _export('DependencyInjection', DependencyInjection);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cUNBQWE7Ozs7O3NDQUNYLDJDQUFnQixRQUFRLFFBQVE7QUFDOUIsaUJBQU8sS0FBUCxHQUFlLFNBQWYsQ0FEOEI7QUFFOUIsaUJBQU8sR0FBUCxDQUFXLENBQ1QsRUFBRSxPQUFPLEVBQVAsRUFBVyxVQUFVLGFBQVYsRUFESixFQUVULEVBQUUsT0FBTyxhQUFQLEVBQWlDLE1BQU0sYUFBTixFQUErQixVQUFVLDBDQUFWLEVBQWdFLEtBQUssSUFBTCxFQUFXLE9BQU8sYUFBUCxFQUZwSSxFQUdULEVBQUUsT0FBTyxVQUFQLEVBQThCLE1BQU0sVUFBTixFQUE0QixVQUFVLHVDQUFWLEVBQTZELEtBQUssSUFBTCxFQUFXLE9BQU8sdUJBQVAsRUFIM0gsRUFJVCxFQUFFLE9BQU8sV0FBUCxFQUErQixNQUFNLFdBQU4sRUFBNkIsVUFBVSx3Q0FBVixFQUE4RCxLQUFLLElBQUwsRUFBVyxPQUFPLFVBQVAsRUFKOUgsQ0FBWCxFQUY4Qjs7QUFTOUIsZUFBSyxNQUFMLEdBQWMsTUFBZCxDQVQ4Qjs7O2VBRHJCIiwiZmlsZSI6Im1vZHVsZXMvZGVwZW5kZW5jeS1pbmplY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
