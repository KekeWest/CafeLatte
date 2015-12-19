import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


class InputView extends BaseView {

  static CHANGE_HEIGHT = "inputview-change-height";

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/input"];
    super(options);
  }

  protected _setEvents(): any {
    return {
      "input .input-area__message-input": "_onInputMessage"
    };
  }

  protected _onInputMessage(): void {
    var str: string = this.$(".input-area__message-input").val();
    var lineCount: number = str.split("\n").length;
    if (1 <= lineCount && lineCount <= 4) {
      this.$(".input-area__message-input").attr("rows", lineCount);
      this.trigger(InputView.CHANGE_HEIGHT);
    }
  }

}
export = InputView;
