import {customElement, bindable} from 'aurelia-framework';

@customElement('replacable-stuff')
export class ReplacableElement {
  @bindable items;

}
