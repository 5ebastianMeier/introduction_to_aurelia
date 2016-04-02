import {Redirect} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: '', redirect: 'components'},
      { route: 'components',            name: 'components',           moduleId: 'modules/components',           nav: true, title: 'Komponenten' },
      { route: 'custom-attributes',     name: 'custom-attributes',    moduleId: 'modules/custom-attributes',    nav: true, title: 'Custom Attributes' },
      { route: 'custom-elements',       name: 'custom-elements',      moduleId: 'modules/custom-elements',      nav: true, title: 'Custom Elements' },
      { route: 'databinding',           name: 'databinding',          moduleId: 'modules/databinding',          nav: true, title: 'Databinding' },
      { route: 'dependency-injection',  name: 'dependency-injection', moduleId: 'modules/dependency-injection', nav: true, title: 'Dependency Injection' },
      { route: 'event-aggregator',      name: 'event-aggregator',     moduleId: 'modules/event-aggregator',     nav: true, title: 'Event-Aggregator' },
      { route: 'routing',               name: 'routing',              moduleId: 'modules/routing',              nav: true, title: 'Routing', auth: true },
      { route: 'templating',            name: 'templating',           moduleId: 'modules/templating',           nav: true, title: 'Templating' }
    ]);

    this.router = router;
  }
}

class AuthorizeStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
      var isLoggedIn = true;
      if (!isLoggedIn) {
        return next.cancel(new Redirect(''));
      }
    }

    return next();
  }
}
