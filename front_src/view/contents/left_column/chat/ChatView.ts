import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");
import SubViewOption = require("../../../base/SubViewOption");

import InputView = require("./InputView");
import MessageListView = require("./MessageListView");


class ChatView extends BaseView {

  protected _messageListView: MessageListView;
  protected _inputView: InputView;

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/chat"];
    this._subViews = [
      new SubViewOption({
        bind: "_messageListView",
        view: new MessageListView(),
        selector: ".messagelist-container"
      }),
      new SubViewOption({
        bind: "_inputView",
        view: new InputView(),
        selector: ".input-container"
      })
    ];
    super(options);
  }

  public render(): ChatView {
    super.render();
    this._resizeMsgListContainer();
    this.listenTo(this._inputView, InputView.CHANGE_HEIGHT, this._resizeMsgListContainer.bind(this));
    return this;
  }

  protected _resizeMsgListContainer(): void {
    var inputHeight: number = this._inputView.$el.height();
    this._messageListView.$el.css({height: "calc(100% - " + inputHeight + "px)"});
  }

}
export = ChatView;
