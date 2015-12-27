import Environment = require("./util/Environment");
import Mediator = require("./util/Mediator");
import ApplicationView = require("./view/ApplicationView");

export function run(): void {
  Environment.checkEnv();
  Mediator.init();

  var appView: ApplicationView = new ApplicationView();
  appView.render();
}
