import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import Mediator = require("../../../mediator/Mediator");
import ViewEvent = require("../../../event/ViewEvent");

import DialogOption = require("./DialogOption");


/**
 * ダイアログViewクラス<br>
 * 新しくダイアログを作成する際は、このクラスを継承して作成していきます
 *
 * @class DialogView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=｛container: null｝] {DialogOption} ダイアログオプション
 */
class DialogView extends BaseView {

  /**
   * 生成したダイアログViewインスタンスに割り振るID番号<br>
   * IDを割り振るごとに+1ずつインクリメントされていきます
   *
   * @property _idNum
   * @protected
   * @static
   * @type {number}
   * @default 0
   */
  protected static _idNum: number = 0;

  /**
   * ダイアログViewのID
   *
   * @property _dialogId
   * @protected
   * @type {string}
   */
  protected _dialogId: string;

  /**
   * ダイアログオプション
   *
   * @property _dialogOption
   * @protected
   * @type {DialogOption}
   */
  protected _dialogOption: DialogOption;

  /**
   * デフォルト値が入ったダイアログオプションを返します
   *
   * @method _defaultOption
   * @static
   * @protected
   * @return {DialogOption}
   */
  protected static _defaultOption(): DialogOption {
    return {
      title: "",
      width: "auto",
      height: "auto",
      top: null,
      left: null,
      modal: false,
      container: null
    };
  }


  constructor(options: DialogOption = {container: null}) {
    this.tagName = "div";
    if (!this.className) {
      this.className = "dialog";
    }
    if (!this._dialogOption) {
      this._dialogOption = _.extend(DialogView._defaultOption(), options);
    } else {
      this._dialogOption = _.extend(DialogView._defaultOption(), this._dialogOption, options);
    }
    if (!this._dialogId) {
      this._dialogId = DialogView._idNum.toString();
      DialogView._idNum++;
    }
    super(options);
  }

  /**
   * elプロパティに設定されているDOM要素をルートとするDOMツリー上で発火したイベントとコールバック関数との関連付けを設定します
   *
   * @method _setEvents
   * @protected
   * @return {any}
   */
  protected _setEvents(): any {
    return _.extend(super._setEvents(), {
      "click .dialog__close-btn": "close"
    });
  }

  /**
   * _dialogIdのゲッター
   *
   * @method dialogId
   * @return {string} _dialogIdの文字列
   */
  get dialogId(): string {
    return this._dialogId;
  }

  /**
   * ダイアログのレンダリングをします
   *
   * @method render
   * @public
   * @param [options=null] {DialogOption} ダイアログオプション
   * @return {DialogView}
   */
  public render(options: DialogOption = null): DialogView {
    if (options) {
      this._dialogOption = _.extend(this._dialogOption, options);
    }
    super.render({
      data: {
        dialogTitle: this._dialogOption.title
      },
      $append: this._dialogOption.container
    });
    this._resize();
    this._adjustPosition();
    this.$el.draggable({
      containment: "document",
      handle: this.$(".dialog__head"),
      cancel: ".dialog__close-btn"
    });
    return this;
  }

  /**
   * elプロパティに設定されているDOM要素の破棄、および、このビューに関連付けしているイベントを全て破棄します
   *
   * @method _remove
   * @protected
   * @return {DialogView}
   */
  protected _remove(): DialogView {
    this.$el.draggable("destroy");
    super.remove();
    return this;
  }

  /**
   * ダイアログを閉じます
   *
   * @method close
   * @public
   * @return {void}
   */
  public close(): void {
    this._remove();
    Mediator.mediator.trigger(ViewEvent.CLOSE_DIALOG, this);
  }

  /**
   * ダイアログのサイズを変更します<br>
   * サイズは_dialogOptionのwidthとheightの値をもとにして変更します
   *
   * @method _resize
   * @protected
   * @return {void}
   */
  protected _resize(): void {
    this.$el.height(this._dialogOption.height);
    this.$el.width(this._dialogOption.width);
  }

  /**
   * ダイアログの表示する位置を調整します<br>
   * 表示する位置は_dialogOptionのtopとleftの値をもとにして変更します
   *
   * @method _adjustPosition
   * @protected
   * @return {void}
   */
  protected _adjustPosition(): void {
    if (!this._dialogOption.top) {
      this._dialogOption.top = Math.round(($(window).height() - this.$el.height()) / 2.0);
    }
    if (!this._dialogOption.left) {
      this._dialogOption.left = Math.round(($(window).width() - this.$el.width()) / 2.0);
    }
    this.$el.css({
      top: this._dialogOption.top,
      left: this._dialogOption.left
    });
  }

}
export = DialogView;
