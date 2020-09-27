export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init();
  }
  init() {
    this.$el.innerHTML = this.template;
  }

  get template() {
    return '<h1>TEST</h1>';
  }
}

function block () {
    return `
    
    `
}