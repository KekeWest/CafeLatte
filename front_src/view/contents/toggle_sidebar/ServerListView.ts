import Backbone = require("backbone");
import JST = require("jst");

import Mediator = require("../../../mediator/Mediator");
import ViewEvent = require("../../../event/ViewEvent");
import BaseView = require("../../base/BaseView");


/**
 * 右トグルサイドバーにあるサーバーリストのViewクラス
 *
 * @class ServerListView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class ServerListView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/toggle_sidebar/server_list"];
    super(options);
  }

  /**
   * elプロパティに設定されているDOM要素をルートとするDOMツリー上で発火したイベントとコールバック関数との関連付けを設定します<br>
   * <br>
   * elプロパティに設定されているDOM要素をルートとするDOMツリーに新しいDOM要素を追加した場合にも、このeventsプロパティで設定している関連付けは動的に行われます。<br>
   * コールバック関数内のthisは、ビューのインスタンスに束縛されます。また、実在しないコールバック関数名を指定すると、例外をスローします。
   *
   * @method _setEvents
   * @protected
   * @return {any} 設定するイベントとコールバック関数との関連付け
   * @example
   *      protected _setEvents(): any {
   *        return {
   *          "click .dom-class": "callbackMethodName"
   *        };
   *      }
   */
  protected _setEvents(): any {
    return _.extend(super._setEvents(), {
      "click .server-list__add-server": "_clickAddServer"
    });
  }

  /**
   * サーバー追加ボタンを押した時に呼ばれるイベントハンドラ<br>
   * サーバー追加ダイアログを表示させます
   *
   * @method _clickAddServer
   * @protected
   * @param event {JQueryEventObject} JQueryイベントオブジェクト
   * @return {void}
   */
  protected _clickAddServer(event: JQueryEventObject): void {
    Mediator.mediator.trigger(ViewEvent.OPEN_ADD_SERVER_DIALOG);
  }

}
export = ServerListView;
