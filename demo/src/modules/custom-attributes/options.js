import {inject, customAttribute, DOM, bindable, dynamicOptions} from 'aurelia-framework';

export class Options {
  einText = 'das beispiel';

  attached() {
    setTimeout(() => {
      this.einText = 'funktioniert';
    }, 2000);
  }
}

@customAttribute('ein-anderes-attribut')
export class MyAttribute {
  @bindable irgendeinText;
  @bindable anderes;

  irgendeinTextChanged(newValue, oldValue) { console.log(newValue); }

  anderesChanged(newValue, oldValue) { console.log(newValue);}
}
