import Environment = require("./util/Environment");
import Mediator = require("./mediator/Mediator");
import WSClient = require("./ws/WSClient");
import ApplicationView = require("./view/ApplicationView");

export function run(): void {
  Environment.checkEnv();
  Mediator.init();
  WSClient.init();
  
  WSClient.connect();

  var appView: ApplicationView = new ApplicationView();
  appView.render();
}
