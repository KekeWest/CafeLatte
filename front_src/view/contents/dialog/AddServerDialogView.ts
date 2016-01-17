import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../mediator/Mediator");

import DialogView = require("./DialogView");
import DialogOption = require("./DialogOption");
import AddServerView = require("../symbol/AddServerView");

/**
 * サーバ追加ダイアログのViewクラス
 *
 * @class AddServerDialogView
 * @extends DialogView
 * @constructor
 * @override
 * @param options {DialogOption} ダイアログオプション
 */
class AddServerDialogView extends DialogView {

  /**
   * ダイアログ名
   *
   * @property dialogName
   * @static
   * @type {string}
   */
  static dialogName: string = "AddServer";

  protected _addServerView: AddServerView;


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
      title: "サーバー追加"
    };
    this._dialogId = AddServerDialogView.dialogName;
    this._listenTo();
    super();
  }

  /**
   * イベントの監視を始めます
   *
   * @method _listenTo
   * @protected
   * @return {void}
   */
  protected _listenTo(): void {
    this.listenTo(Mediator.mediator, Mediator.ViewEvent.END_ADD_SERVER, this._close.bind(this));
  }

  public _close(addServerView: AddServerView): void {
    if (addServerView && addServerView === this._addServerView) {
      super.close();
    }
  }

}
export = AddServerDialogView;
