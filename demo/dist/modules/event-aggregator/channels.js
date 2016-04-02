'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', './messages/test-message'], function (_export, _context) {
  var inject, EventAggregator, TestMessage, _dec, _class, Channels;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_messagesTestMessage) {
      TestMessage = _messagesTestMessage.TestMessage;
    }],
    execute: function () {
      _export('Channels', Channels = (_dec = inject(EventAggregator), _dec(_class = function () {
        function Channels(eventAggregator) {
          _classCallCheck(this, Channels);

          this.eventAggregator = eventAggregator;
        }

        Channels.prototype.subscribe = function subscribe() {
          this.eventAggregator.subscribe('channel name here', function (payload) {
            alert(payload.nachricht);
          });
        };

        Channels.prototype.publish = function publish() {
          this.eventAggregator.publish('channel name here', new TestMessage('I got your message.'));
        };

        return Channels;
      }()) || _class));

      _export('Channels', Channels);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZXZlbnQtYWdncmVnYXRvci9jaGFubmVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7O0FBQ0E7OzswQkFHSyxtQkFEWixPQUFPLGVBQVA7QUFFQyxpQkFEVyxRQUNYLENBQVksZUFBWixFQUE2QjtnQ0FEbEIsVUFDa0I7O0FBQzNCLGVBQUssZUFBTCxHQUF1QixlQUF2QixDQUQyQjtTQUE3Qjs7QUFEVywyQkFLWCxpQ0FBWTtBQUNWLGVBQUssZUFBTCxDQUFxQixTQUFyQixDQUErQixtQkFBL0IsRUFBb0QsbUJBQVc7QUFDN0Qsa0JBQU0sUUFBUSxTQUFSLENBQU4sQ0FENkQ7V0FBWCxDQUFwRCxDQURVOzs7QUFMRCwyQkFXWCw2QkFBVTtBQUNSLGVBQUssZUFBTCxDQUFxQixPQUFyQixDQUE2QixtQkFBN0IsRUFBa0QsSUFBSSxXQUFKLENBQWdCLHFCQUFoQixDQUFsRCxFQURROzs7ZUFYQyIsImZpbGUiOiJtb2R1bGVzL2V2ZW50LWFnZ3JlZ2F0b3IvY2hhbm5lbHMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
