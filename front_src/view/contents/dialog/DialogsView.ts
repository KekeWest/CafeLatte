import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../mediator/Mediator");
import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import DialogView = require("./DialogView");
import AddServerDialogView = require("./AddServerDialogView");

/**
 * ダイアログを管理するクラス
 *　
 *
 * @class DialogsView
 * @extends BaseView
 * @constructor
 */
class DialogsView extends BaseView {

 /**
  * 現在のz-indexの最大値
  *
  * @property _zIndex
  * @type {number}
  * @default 1000
  * @protected
  */
  protected _zIndex: number;

 /**
  * DialogViewインスタンスを格納しておくためのオブジェクト
  *
  * @property _dialogs
  * @type {{[dialogId: string]: DialogView}}
  * @default {}
  * @protected
  */
  protected _dialogs: {[dialogId: string]: DialogView};

  constructor(options?: any) {
    this._template = JST["contents/dialog/dialogs"];
    this._zIndex = 1000;
    this._dialogs = {};
    this._listenTo();
    super(options);
  }

  protected _listenTo(): void {
    this.listenTo(Mediator.mediator, Mediator.ViewEvent.OPEN_ADD_SERVER_DIALOG, this.showAddServer.bind(this));
    this.listenTo(Mediator.mediator, Mediator.ViewEvent.CLOSE_DIALOG, this._removeDialog.bind(this));
  }

 /**
  * サーバ追加のダイアログを出す
  * ダイアログが既に出ている場合はそのダイアログにフォーカスを当てる
  *
  * @method showAddServer
  * @public
  * @return {void}
  */
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

 /**
  * ダイアログが閉じられた場合に呼ばれるイベントハンドラ<br>
  * _dialogsから閉じられたダイアログを削除する
  *
  * @method _removeDialog
  * @protected
  * @param dialog {DialogView} DialogViewインスタンス
  * @return {void}
  */
  protected _removeDialog(dialog: DialogView): void {
    delete this._dialogs[dialog.dialogId];
  }

}
export = DialogsView;
