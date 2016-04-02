import {BoundViewFactory, ViewSlot, customAttribute, templateController, inject} from 'aurelia-framework';

export class TemplateController {
  food = 'pizza';

  attached() {
    setTimeout(() => {
      this.food = 'cookie';
    }, 3000);
  }
}

// templateController signalisiert, dass das element, an dem das attribut platziert ist,
// in ein template umgewandelt werden soll, dessen instanziierung das attribut verwaltet

@customAttribute('cookie-monster')
@templateController
@inject(BoundViewFactory, ViewSlot)
export class CookieMonster {
  constructor(viewFactory, viewSlot) {
    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
  }

  valueChanged(newValue) {
    if (newValue === 'cookie') {
      let view = this.viewFactory.create();
      this.viewSlot.add(view);
    } else {
      this.viewSlot.removeAll();
    }
  }
}
