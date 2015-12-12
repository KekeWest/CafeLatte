import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


class MessageListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/messagelist"];
    super(options);
  }

}
export = MessageListView;
