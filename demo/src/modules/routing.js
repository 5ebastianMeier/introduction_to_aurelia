export class Routing {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'configuration'},
      { route: 'configuration',            name: 'configuration',           moduleId: 'modules/routing/configuration',           nav: true, title: 'Konfiguration' },
      { route: 'lifecycle',            name: 'lifecycle',           moduleId: 'modules/routing/lifecycle',           nav: true, title: 'Lifecycle' },
      { route: 'view-ports',            name: 'view-ports',           moduleId: 'modules/routing/view-ports',           nav: true, title: 'View Ports' }
    ]);

    this.router = router;
  }
}
