export class CustomElements {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'simple'},
      { route: 'simple',            name: 'simple',           moduleId: 'modules/custom-elements/simple',           nav: true, title: 'Simples Custom Element' },
      { route: 'svg',            name: 'svg',           moduleId: 'modules/custom-elements/svg-example',           nav: true, title: 'Svg' },
      { route: 'replacements',            name: 'replacements',           moduleId: 'modules/custom-elements/replacements',           nav: true, title: 'Replacements' },
      { route: 'surrogates',            name: 'surrogates',           moduleId: 'modules/custom-elements/surrogates',           nav: true, title: 'Surrogates' }
    ]);

    this.router = router;
  }
}
