import Backbone = require("backbone");

import ServerCollection = require("./ServerCollection");

class CollectionManager {

  public static serverCollection: ServerCollection;


  public static init(): void {
    this.serverCollection = new ServerCollection();
  }

}
export = CollectionManager;
