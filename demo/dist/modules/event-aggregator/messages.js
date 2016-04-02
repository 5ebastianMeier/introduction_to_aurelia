'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', './messages/test-message'], function (_export, _context) {
  var inject, EventAggregator, TestMessage, _dec, _class, Messages;

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
      _export('Messages', Messages = (_dec = inject(EventAggregator), _dec(_class = function () {
        function Messages(eventAggregator) {
          _classCallCheck(this, Messages);

          this.eventAggregator = eventAggregator;
        }

        Messages.prototype.subscribe = function subscribe() {
          this.eventAggregator.subscribe(TestMessage, function (payload) {
            alert(payload.nachricht);
          });
        };

        Messages.prototype.publish = function publish() {
          this.eventAggregator.publish(new TestMessage('I got your message.'));
        };

        return Messages;
      }()) || _class));

      _export('Messages', Messages);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZXZlbnQtYWdncmVnYXRvci9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7O0FBQ0E7OzswQkFHSyxtQkFEWixPQUFPLGVBQVA7QUFFQyxpQkFEVyxRQUNYLENBQVksZUFBWixFQUE2QjtnQ0FEbEIsVUFDa0I7O0FBQzNCLGVBQUssZUFBTCxHQUF1QixlQUF2QixDQUQyQjtTQUE3Qjs7QUFEVywyQkFLWCxpQ0FBWTtBQUNWLGVBQUssZUFBTCxDQUFxQixTQUFyQixDQUErQixXQUEvQixFQUE0QyxtQkFBVztBQUNyRCxrQkFBTSxRQUFRLFNBQVIsQ0FBTixDQURxRDtXQUFYLENBQTVDLENBRFU7OztBQUxELDJCQVdYLDZCQUFVO0FBQ1IsZUFBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLElBQUksV0FBSixDQUFnQixxQkFBaEIsQ0FBN0IsRUFEUTs7O2VBWEMiLCJmaWxlIjoibW9kdWxlcy9ldmVudC1hZ2dyZWdhdG9yL21lc3NhZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
