import Environment = require("./util/Environment");
import ApplicationView = require("./view/ApplicationView");

export function run(): void {
  var appView: ApplicationView = new ApplicationView();

  Environment.checkEnv();
  appView.render();
}
