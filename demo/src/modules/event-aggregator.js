export class EventAggregator {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'channels'},
      { route: 'channels',            name: 'channels',           moduleId: 'modules/event-aggregator/channels',           nav: true, title: 'Channels' },
      { route: 'messages',            name: 'messages',           moduleId: 'modules/event-aggregator/messages',           nav: true, title: 'Nachrichten' }
    ]);

    this.router = router;
  }
}
