import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../mediator/Mediator");
import ViewEvent = require("../../../event/ViewEvent");
import BaseView = require("../../base/BaseView");


class ServerListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/toggle_sidebar/server_list"];
    super(options);
  }

  protected _setEvents(): any {
    return {
      "click .server-list__add-server": "_clickAddServer"
    };
  }

  protected _clickAddServer(event: JQueryEventObject): void {
    Mediator.mediator.trigger(ViewEvent.OPEN_ADD_SERVER_DIALOG);
  }

}
export = ServerListView;
