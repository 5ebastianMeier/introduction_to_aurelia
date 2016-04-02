export class Databinding {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'binding'},
      { route: 'binding',            name: 'binding',           moduleId: 'modules/databinding/binding',           nav: true, title: 'Binding' },
      { route: 'computed',            name: 'computed',           moduleId: 'modules/databinding/computed',           nav: true, title: 'Computed' },
      { route: 'references',            name: 'references',           moduleId: 'modules/databinding/references',           nav: true, title: 'Referenzen' },
      { route: 'methods',            name: 'methods',           moduleId: 'modules/databinding/methods',           nav: true, title: 'Methoden' },
      { route: 'events',            name: 'events',           moduleId: 'modules/databinding/events',           nav: true, title: 'Events' },
      { route: 'selections',            name: 'selections',           moduleId: 'modules/databinding/selections',           nav: true, title: 'Selektionen' },
      { route: 'converter',            name: 'converter',           moduleId: 'modules/databinding/converter',           nav: true, title: 'Konverter' }
    ]);

    this.router = router;
  }
}
