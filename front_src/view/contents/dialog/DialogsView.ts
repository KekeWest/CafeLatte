import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../mediator/Mediator");
import ViewEvent = require("../../../event/ViewEvent");
import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import DialogView = require("./DialogView");
import AddServerDialogView = require("./AddServerDialogView");

class DialogsView extends BaseView {

  protected _zIndex: number;
  protected _dialogs: {[dialog: string]: DialogView};

  constructor(options?: any) {
    this._template = JST["contents/dialog/dialogs"];
    this._zIndex = 1000;
    this._dialogs = {};
    this._startListenEvent();
    super(options);
  }

  protected _startListenEvent(): void {
    this.listenTo(Mediator.mediator, ViewEvent.OPEN_ADD_SERVER_DIALOG, this.showAddServer.bind(this));
    this.listenTo(Mediator.mediator, ViewEvent.CLOSE_DIALOG, this._removeDialog.bind(this));
  }

  public showAddServer(): void {
    if (this._dialogs[AddServerDialogView.dialogName]) {
      return;
    }
    var addServerDialog: AddServerDialogView = new AddServerDialogView();
    addServerDialog.render({container: this.$el});
    this._dialogs[addServerDialog.dialogId] = addServerDialog;
  }

  public focusDialog(): void {
    return;
  }

  protected _removeDialog(dialog: DialogView): void {
    delete this._dialogs[dialog.dialogId];
  }

}
export = DialogsView;
