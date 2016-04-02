import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TestMessage} from './messages/test-message';

@inject(EventAggregator)
export class Channels {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  subscribe() {
    this.eventAggregator.subscribe('channel name here', payload => {
      alert(payload.nachricht);
    });
  }

  publish() {
    this.eventAggregator.publish('channel name here', new TestMessage('I got your message.'));
  }

}
