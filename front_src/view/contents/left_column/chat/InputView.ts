import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


class InputView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/left_column/chat/input"];
    super(options);
  }

}
export = InputView;
