import {computedFrom} from 'aurelia-framework';

export class Computed {
  firstString = 'this is a';
  secondString = 'string';

  @computedFrom('firstString', 'secondString')
  get boundString() {
    return `${this.firstString} ${this.secondString}`;
  }
}
