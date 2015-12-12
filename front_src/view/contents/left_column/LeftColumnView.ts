import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");
import ChatView = require("./chat/ChatView");
import GlobalMessageListView = require("./globalmessages/GlobalMessageListView");


class LeftColumnView extends BaseView {

  protected _chatView: ChatView;
  protected _globalMessageListView: GlobalMessageListView;

  constructor(options?: any) {
    this._template = JST["contents/left_column/left_column"];
    this._subViews = [
      new SubViewOption({
        bind: "_chatView",
        view: new ChatView(),
        selector: ".chat-container"
      }),
      new SubViewOption({
        bind: "_globalMessageListView",
        view: new GlobalMessageListView(),
        selector: ".global-msg-container"
      })
    ];
    super(options);
  }

  public render(): LeftColumnView {
    super.render();
    this._setResizable();
    return this;
  }

  protected _setResizable(): void {
    $(".chat-container").resizable({
      containment: ".left-col-container",
      handles: "s",
      resize: this._resizeGlobalMsgContainer.bind(this),
      stop: this._resizeGlobalMsgContainer.bind(this)
    });
  }

  protected _resizeGlobalMsgContainer(
    event: Event, ui: JQueryUI.ResizableUIParams): void {
    if (event.type === "resizestop") {
      var globalMsgHeight: number = this._globalMessageListView.$el.height() * 100.0 / this.$el.height();
      var chatHeight: number = 100 - globalMsgHeight;
      this._globalMessageListView.$el.height(globalMsgHeight + "%");
      this._chatView.$el.height(chatHeight + "%");
    } else {
      this._globalMessageListView.$el.height(this.$el.height() - ui.size.height);
    }
  }

}
export = LeftColumnView;
