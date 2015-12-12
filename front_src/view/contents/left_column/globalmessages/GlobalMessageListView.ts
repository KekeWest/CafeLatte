import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


class GlobalMessageListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/global_messagelist"];
    super(options);
  }

}
export = GlobalMessageListView;
