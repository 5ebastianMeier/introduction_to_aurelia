export class Configuration {
  routeTest = 'test1';
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '',            name: 'examples',           moduleId: 'modules/routing/example/index',  title: 'Beispiele' },
      { route: ':id',            name: 'exampleDetail1',           moduleId: 'modules/routing/example/detail',      title: 'Beispieldetails' },
      { route: 'examples/:id/',            name: 'exampleDetail2',           moduleId: 'modules/routing/example/detail',      title: 'Beispieldetails' },
      { route: ':id/:more/:evenMore',            name: 'exampleDetail2',           moduleId: 'modules/routing/example/detail',      title: 'Beispieldetails' },
    ]);

    this.router = router;
  }
}
