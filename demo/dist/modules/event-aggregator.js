'use strict';

System.register([], function (_export, _context) {
  var EventAggregator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('EventAggregator', EventAggregator = function () {
        function EventAggregator() {
          _classCallCheck(this, EventAggregator);
        }

        EventAggregator.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: '', redirect: 'channels' }, { route: 'channels', name: 'channels', moduleId: 'modules/event-aggregator/channels', nav: true, title: 'Channels' }, { route: 'messages', name: 'messages', moduleId: 'modules/event-aggregator/messages', nav: true, title: 'Nachrichten' }]);

          this.router = router;
        };

        return EventAggregator;
      }());

      _export('EventAggregator', EventAggregator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZXZlbnQtYWdncmVnYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztpQ0FBYTs7Ozs7a0NBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sRUFBUCxFQUFXLFVBQVUsVUFBVixFQURKLEVBRVQsRUFBRSxPQUFPLFVBQVAsRUFBOEIsTUFBTSxVQUFOLEVBQTRCLFVBQVUsbUNBQVYsRUFBeUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxVQUFQLEVBRnZILEVBR1QsRUFBRSxPQUFPLFVBQVAsRUFBOEIsTUFBTSxVQUFOLEVBQTRCLFVBQVUsbUNBQVYsRUFBeUQsS0FBSyxJQUFMLEVBQVcsT0FBTyxhQUFQLEVBSHZILENBQVgsRUFGOEI7O0FBUTlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FSOEI7OztlQURyQiIsImZpbGUiOiJtb2R1bGVzL2V2ZW50LWFnZ3JlZ2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
