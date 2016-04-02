export class Lifecycle {
  constructor() {
    console.log('constructor');
  }

  created(owningView, myView) {
    console.log('created');
    console.log(owningView);
    console.log(myView);
  }

  bind(bindingContext, overrideContext) {
    console.log('bind');
    console.log(bindingContext);
    console.log(overrideContext);
  }

  attached() {
    console.log('attached');
  }

  detached() {
    console.log('detached');
  }

  unbind() {
    console.log('unbind');
  }
}
