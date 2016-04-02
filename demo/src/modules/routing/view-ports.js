export class ViewPorts {
  configureRouter(config) {
    config.map([{
      route: '',
      viewPorts: {
        portOne: {
          moduleId: 'modules/routing/view-ports/eins'
        },
        portTwo: {
          moduleId: 'modules/routing/view-ports/zwei'
        }
      }
    }]);
  }
}
