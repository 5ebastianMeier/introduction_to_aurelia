import {transient} from 'aurelia-framework';

@transient()
export class Example {
  constructor() {
    alert('created');
  }

  checkIfLoaded() {
    alert('called');
  }
}
