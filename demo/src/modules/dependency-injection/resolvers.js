import {Lazy, inject} from 'aurelia-framework';
import {Example} from './resolvers/example';

@inject(Lazy.of(Example))
export class Resolvers {
  constructor(example) {
    this.example = example;
  }

  doStuff() {
    this.example().checkIfLoaded();
  }
}
