import Backbone = require("backbone");

import viewEvent = require("../event/ViewEvent");


class Mediator {

  public static ViewEvent = viewEvent;

  public static mediator: any;

  public static init(): void {
    this.mediator = {};
    _.extend(this.mediator, Backbone.Events);
  }

}
export = Mediator;
