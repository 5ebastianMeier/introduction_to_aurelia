export class Templating {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'require'},
      { route: 'require',            name: 'require',           moduleId: 'modules/templating/require',           nav: true, title: 'Templates' },
      { route: 'repeater',            name: 'repeater',           moduleId: 'modules/templating/repeater',           nav: true, title: 'Repeater' },
      { route: 'conditions',            name: 'conditions',           moduleId: 'modules/templating/conditions',           nav: true, title: 'Bedingungen' },
      { route: 'composition',            name: 'composition',           moduleId: 'modules/templating/composition',           nav: true, title: 'Komposition' }
    ]);

    this.router = router;
  }
}
