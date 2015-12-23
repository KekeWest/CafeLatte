import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ServerListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/toggle_sidebar/server_list"];
    super(options);
  }

}
export = ServerListView;
