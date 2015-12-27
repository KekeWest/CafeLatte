import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../util/Mediator");
import ViewEvent = require("../../../enum/ViewEvent");
import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import DialogView = require("./DialogView");
import AddServerDialogView = require("./AddServerDialogView");

class DialogsView extends BaseView {

  protected _zIndex: number;
  protected _dialogs: {[dialogName: string]: DialogView};

  constructor(options?: any) {
    this._template = JST["contents/dialog/dialogs"];
    this._zIndex = 1000;
    this._dialogs = {};
    this._startListenEvent();
    super(options);
  }

  protected _startListenEvent(): void {
    this.listenTo(Mediator.mediator, ViewEvent.OPEN_ADD_SERVER_DIALOG, this.showAddServer.bind(this));
  }

  public showAddServer(): void {
    if (this._dialogs["AddServer"]) {
      return;
    }
    var addServerDialog: AddServerDialogView = new AddServerDialogView();
    addServerDialog.render({container: this.$el});
    this._dialogs["AddServer"] = addServerDialog;
  }

  public focusDialog(): void {
    return;
  }

}
export = DialogsView;
