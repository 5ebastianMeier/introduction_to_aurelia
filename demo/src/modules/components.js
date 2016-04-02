export class Components {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'explicit'},
      { route: 'explicit',            name: 'explicit',           moduleId: 'modules/components/explicit',           nav: true, title: 'Explizite Deklaration' },
      { route: 'lifecycle',            name: 'lifecycle',           moduleId: 'modules/components/lifecycle',           nav: true, title: 'Lifecycle' }
    ]);

    this.router = router;
  }
}
