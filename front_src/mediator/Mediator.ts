import Backbone = require("backbone");

class Mediator {

  static mediator: any;

  static init(): void {
    this.mediator = {};
    _.extend(this.mediator, Backbone.Events);
  }

}

export = Mediator;
