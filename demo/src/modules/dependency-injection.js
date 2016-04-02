export class DependencyInjection {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'declaration'},
      { route: 'declaration',            name: 'declaration',           moduleId: 'modules/dependency-injection/declaration',           nav: true, title: 'Deklaration' },
      { route: 'explicit',            name: 'explicit',           moduleId: 'modules/dependency-injection/explicit',           nav: true, title: 'Explizite Deklaration' },
      { route: 'resolvers',            name: 'resolvers',           moduleId: 'modules/dependency-injection/resolvers',           nav: true, title: 'Resolver' }
    ]);

    this.router = router;
  }
}
