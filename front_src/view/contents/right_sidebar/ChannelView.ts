import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ChannelView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/channel"];
    super(options);
  }

}
export = ChannelView;
