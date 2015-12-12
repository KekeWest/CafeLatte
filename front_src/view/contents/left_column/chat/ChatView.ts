import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");
import SubViewOption = require("../../../base/SubViewOption");

import InputView = require("./InputView");
import MessageListView = require("./MessageListView");


class ChatView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/chat"];
    this._subViews = [
      new SubViewOption({
        bind: "messageListView",
        view: new MessageListView(),
        selector: ".messagelist-container"
      }),
      new SubViewOption({
        bind: "inputView",
        view: new InputView(),
        selector: ".input-container"
      })
    ];
    super(options);
  }

}
export = ChatView;
