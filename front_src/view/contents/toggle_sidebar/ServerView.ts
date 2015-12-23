import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ServerView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/server"];
    super(options);
  }

}
export = ServerView;
