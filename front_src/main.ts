import Environment = require("./util/Environment");
import CollectionManager = require("./collection/CollectionManager");
import Mediator = require("./mediator/Mediator");
import WSClient = require("./ws/WSClient");
import ApplicationView = require("./view/ApplicationView");

export function run(): void {
  Environment.checkEnv();
  CollectionManager.init();
  Mediator.init();
  WSClient.init();

  WSClient.connect();

  var appView: ApplicationView = new ApplicationView();
  appView.render();
}
