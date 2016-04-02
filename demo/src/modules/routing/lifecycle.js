export class Lifecycle {
  canActivate(params, routeConfig, navigationInstruction) {
    console.log('canActivate');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }

  activate(params, routeConfig, navigationInstruction) {
    console.log('activate');

    setTimeout(() => {
      routeConfig.navModel.setTitle('Custom Title (Lifecycle)');
    }, 2000);
  }

  canDeactivate() {
    console.log('canDeactivate');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }

  deactivate() {
    console.log('deactivate ');
  }
}
