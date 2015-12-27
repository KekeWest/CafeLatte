import Backbone = require("backbone");
import JST = require("jst");

import DialogView = require("./DialogView");
import DialogOption = require("./DialogOption");
import AddServerView = require("../symbol/AddServerView");


class AddServerDialogView extends DialogView {

  constructor(options?: DialogOption) {
    this._template = JST["contents/dialog/dialog"];
    this._subViews = [
      {
        bind: "_addServerView",
        view: new AddServerView(),
        selector: ".dialog-body"
      }
    ];
    this._dialogOption = {title: "サーバー追加"};
    super();
  }

}
export = AddServerDialogView;
