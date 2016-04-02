import {inject, customAttribute, DOM} from 'aurelia-framework';

export class Declaration {
  testWert = 'das beispiel';

  attached() {
    setTimeout(() => {
      this.testWert = 'funktioniert';
    }, 3000);
  }
}

@customAttribute('irgendein-attribut')
@inject(DOM.Element)
export class SampleAttribute {
  constructor(element) {
    this.element = element;
  }
  valueChanged(newValue, oldValue) {
    this.element.textContent = newValue;
  }
}
