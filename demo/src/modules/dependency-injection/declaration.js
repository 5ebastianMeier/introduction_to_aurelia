import {inject} from 'aurelia-framework';
import {Class1} from './declaration/first-class';
import {Class2} from './declaration/second-class';

@inject(Class1, Class2)
export class Declaration {
  constructor(class1, class2) {
    this.class1 = class1;
    this.class2 = class2;
  }
}
