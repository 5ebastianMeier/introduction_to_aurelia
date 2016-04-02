import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources('./dist/sub-nav.html');


  aurelia.start().then(() => aurelia.setRoot());
}
