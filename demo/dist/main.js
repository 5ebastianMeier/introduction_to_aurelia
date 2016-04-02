'use strict';

System.register(['bootstrap'], function (_export, _context) {
  return {
    setters: [function (_bootstrap) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().globalResources('./dist/sub-nav.html');

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZILEdBR0csZUFISCxDQUdtQixxQkFIbkIsRUFEaUM7O0FBT2pDLGdCQUFRLEtBQVIsR0FBZ0IsSUFBaEIsQ0FBcUI7aUJBQU0sUUFBUSxPQUFSO1NBQU4sQ0FBckIsQ0FQaUM7T0FBNUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
