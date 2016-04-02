import {customElement, bindable} from 'aurelia-framework';

@customElement('who-you-gonna-call')
export class Behavior {

  @bindable onGhost;

  ghostAppeared() {
    if (this.onGhost) {
      this.onGhost({
        recipient: 'GHOSTBUSTERS!'
      });
    }
  }

}
