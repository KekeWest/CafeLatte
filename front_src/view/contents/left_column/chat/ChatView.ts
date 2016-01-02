import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");
import SubViewOption = require("../../../base/SubViewOption");

import InputView = require("./InputView");
import MessageListView = require("./MessageListView");

/**
 * チャット部分のViewクラス<br>
 * 左カラムのチャット部分のクラスです。現在入っているチャンネル（もしくはユーザ）のチャットを表示します<br>
 * 子ViewにメッセージリストView、メッセージ入力Viewを持ち管理しています
 *
 * @class ChatView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class ChatView extends BaseView {

  /**
   * メッセージリストView
   *
   * @property _messageListView
   * @protected
   * @type {MessageListView}
   */
  protected _messageListView: MessageListView;

  /**
   * メッセージ入力部分のView
   *
   * @property _inputView
   * @protected
   * @type {InputView}
   */
  protected _inputView: InputView;


  constructor(options: any = null) {
    this._template = JST["contents/left_column/chat/chat"];
    this._subViews = [
      {
        bind: "_messageListView",
        view: new MessageListView(),
        selector: ".messagelist-container"
      },
      {
        bind: "_inputView",
        view: new InputView(),
        selector: ".input-container"
      }
    ];
    super(options);
  }

  /**
   * Viewをレンダリングします
   *
   * @override
   * @method render
   * @public
   * @return {ChatView}
   */
  public render(): ChatView {
    super.render();
    this._resizeMsgListContainer();
    this.listenTo(this._inputView, InputView.CHANGE_HEIGHT, this._resizeMsgListContainer.bind(this));
    return this;
  }

  /**
   * メッセージリストViewが入るDOM要素の高さを調整します<br>
   * メッセージ入力部分のViewの高さが変更した時に呼び出され、メッセージ入力部分の高さの変更に合わせてDOM要素の高さを調整します。
   *
   * @method _resizeMsgListContainer
   * @protected
   * @return {void}
   */
  protected _resizeMsgListContainer(): void {
    var inputHeight: number = this._inputView.$el.height();
    this._messageListView.$el.css({height: "calc(100% - " + inputHeight + "px)"});
  }

}
export = ChatView;
