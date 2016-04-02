import {inject} from 'aurelia-framework';
import {Example} from './resolvers/example';

@inject(Example, Example)
export class Explicit {
  constructor(example1, example2) {
    this.example1 = example1;
    this.example2 = example2;
  }

  compareDependencies() {
    alert(`1 === 2: ${this.example1 === this.example2}`);
  }
}
