'use strict';

System.register([], function (_export, _context) {
  var Components;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Components', Components = function () {
        function Components() {
          _classCallCheck(this, Components);
        }

        Components.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'explicit' }, { route: 'explicit', name: 'explicit', moduleId: 'modules/components/explicit', nav: true, title: 'Explizite Deklaration' }, { route: 'lifecycle', name: 'lifecycle', moduleId: 'modules/components/lifecycle', nav: true, title: 'Lifecycle' }]);

          this.router = router;
        };

        return Components;
      }());

      _export('Components', Components);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs0QkFBYTs7Ozs7NkJBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sRUFBUCxFQUFXLFVBQVUsVUFBVixFQURKLEVBRVQsRUFBRSxPQUFPLFVBQVAsRUFBOEIsTUFBTSxVQUFOLEVBQTRCLFVBQVUsNkJBQVYsRUFBbUQsS0FBSyxJQUFMLEVBQVcsT0FBTyx1QkFBUCxFQUZqSCxFQUdULEVBQUUsT0FBTyxXQUFQLEVBQStCLE1BQU0sV0FBTixFQUE2QixVQUFVLDhCQUFWLEVBQW9ELEtBQUssSUFBTCxFQUFXLE9BQU8sV0FBUCxFQUhwSCxDQUFYLEVBRjhCOztBQVE5QixlQUFLLE1BQUwsR0FBYyxNQUFkLENBUjhCOzs7ZUFEckIiLCJmaWxlIjoibW9kdWxlcy9jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
