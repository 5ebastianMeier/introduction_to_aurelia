export class Conditions {
  showActive = false;
  ifActive = false;

  toggleShowBinding() {
    this.showActive = !this.showActive;
  }

  toggleIfBinding() {
    this.ifActive = !this.ifActive;
  }
}
