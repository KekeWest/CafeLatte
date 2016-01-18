import Backbone = require("backbone");

import BaseCollection = require("./base/BaseCollection");

import ServerModel = require("../model/ServerModel");

class ServerCollection extends BaseCollection {

  constructor(models?: ServerModel[] | Object[], options?: any) {
    this.url = "/api/servers";
    super(models, options);
  }

}
export = ServerCollection;
