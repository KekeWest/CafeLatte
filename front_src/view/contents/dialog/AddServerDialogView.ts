import Backbone = require("backbone");
import JST = require("jst");

import DialogView = require("./DialogView");
import DialogOption = require("./DialogOption");
import AddServerView = require("../symbol/AddServerView");


class AddServerDialogView extends DialogView {

  static dialogName: string = "AddServer";

  constructor(options?: DialogOption) {
    this._template = JST["contents/dialog/dialog"];
    this._subViews = [
      {
        bind: "_addServerView",
        view: new AddServerView(),
        selector: ".dialog__body"
      }
    ];
    this._dialogOption = {
      title: "サーバー追加",
      width: 400,
      height: 300
    };
    this._dialogId = AddServerDialogView.dialogName;
    super();
  }

}
export = AddServerDialogView;
