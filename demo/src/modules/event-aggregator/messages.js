import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TestMessage} from './messages/test-message';

@inject(EventAggregator)
export class Messages {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  subscribe() {
    this.eventAggregator.subscribe(TestMessage, payload => {
      alert(payload.nachricht);
    });
  }

  publish() {
    this.eventAggregator.publish(new TestMessage('I got your message.'));
  }

}
