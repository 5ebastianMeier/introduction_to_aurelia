export class CustomAttributes {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'declaration'},
      { route: 'declaration',            name: 'declaration',           moduleId: 'modules/custom-attributes/declaration',           nav: true, title: 'Deklaration' },
      { route: 'options',            name: 'options',           moduleId: 'modules/custom-attributes/options',           nav: true, title: 'Optionen' },
      { route: 'template-controller',            name: 'template-controller',           moduleId: 'modules/custom-attributes/template-controller',           nav: true, title: 'Template Controller' }
    ]);

    this.router = router;
  }
}
