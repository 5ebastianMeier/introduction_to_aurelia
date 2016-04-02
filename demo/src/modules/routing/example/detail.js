export class ExampleDetails {
  activate(params, routeConfig, navigationInstruction) {
    this.id = params.id;
    this.more = params.more;
    this.evenMore = params.evenMore;
  }
}
