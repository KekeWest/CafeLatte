import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");
import ChatView = require("./chat/ChatView");
import GlobalMessageListView = require("./globalmessages/GlobalMessageListView");


/**
 * 左カラムViewクラス<br>
 * チャット部分のView、グローバルメッセージリストViewを子Viewとして持ち管理しています
 *
 * @class LeftColumnView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class LeftColumnView extends BaseView {

  /**
   * チャット部分のView
   *
   * @property _chatView
   * @protected
   * @type {ChatView}
   */
  protected _chatView: ChatView;

  /**
   * グローバルメッセージリストのView
   *
   * @property _globalMessageListView
   * @protected
   * @type {GlobalMessageListView}
   */
  protected _globalMessageListView: GlobalMessageListView;


  constructor(options: any = null) {
    this._template = JST["contents/left_column/left_column"];
    this._subViews = [
      {
        bind: "_chatView",
        view: new ChatView(),
        selector: ".chat-container"
      },
      {
        bind: "_globalMessageListView",
        view: new GlobalMessageListView(),
        selector: ".global-msg-container"
      }
    ];
    super(options);
  }

  /**
   * Viewをレンダリングします<br>
   * レンダリングした後にJQueryUIのresizableを使い、チャット部分のViewをドラッグでサイズ調整できるようセッティングします
   *
   * @override
   * @method render
   * @public
   * @return {LeftColumnView}
   */
  public render(): LeftColumnView {
    super.render();
    this._setResizable();
    return this;
  }

  /**
   * JQueryUIのresizableを使い、チャット部分のViewをドラッグでサイズ調整できるようセッティングします
   *
   * @method _setResizable
   * @protected
   * @return {void}
   */
  protected _setResizable(): void {
    this._chatView.$el.resizable({
      containment: ".left-col-container",
      handles: "s",
      resize: this._resizeGlobalMsgContainer.bind(this),
      stop: this._resizeGlobalMsgContainer.bind(this)
    });
  }

  /**
   * チャット部分Viewをドラッグによりサイズ調整しているときに呼ばれるイベントハンドラ<br>
   * チャット部分のViewの高さに合わせてグローバルメッセージリストViewの高さを調整します<br>
   * ドラッグによるサイズ調整が終わると、チャット部分ViewとグローバルメッセージリストViewの高さ指定を%表示に戻します
   *
   * @method _resizeGlobalMsgContainer
   * @protected
   * @param event {Event} JQueryイベントオブジェクト
   * @param ui {JQueryUI.ResizableUIParams}
   * @return {void}
   */
  protected _resizeGlobalMsgContainer(
    event: Event, ui: JQueryUI.ResizableUIParams): void {
    if (event.type === "resizestop") {
      var globalMsgHeight: number = this._globalMessageListView.$el.height() * 100.0 / this.$el.height();
      var chatHeight: number = 100 - globalMsgHeight;
      this._globalMessageListView.$el.height(globalMsgHeight + "%");
      this._chatView.$el.height(chatHeight + "%");
    } else {
      this._globalMessageListView.$el.height(this.$el.height() - ui.size.height);
    }
  }

}
export = LeftColumnView;
