import {customElement, bindable} from 'aurelia-framework';

@customElement('im-a-tractor')
export class ImATractor {
  @bindable fuel;

  drive() {
    if (this.fuel === 'diesel') {
      alert('vroom vroom')
    }
  }
}
