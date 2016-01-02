import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


/**
 * メッセージ入力部分のViewクラス
 *
 * @class InputView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class InputView extends BaseView {

  /**
   * メッセージ入力部分の高さが変更した時に発火するイベント
   *
   * @event CHANGE_HEIGHT
   * @static
   */
  static CHANGE_HEIGHT = "InputView.CHANGE_HEIGHT";


  constructor(options: any = null) {
    this._template = JST["contents/left_column/chat/input"];
    super(options);
  }

  /**
   * elプロパティに設定されているDOM要素をルートとするDOMツリー上で発火したイベントとコールバック関数との関連付けを設定します<br>
   * <br>
   * elプロパティに設定されているDOM要素をルートとするDOMツリーに新しいDOM要素を追加した場合にも、このeventsプロパティで設定している関連付けは動的に行われます。<br>
   * コールバック関数内のthisは、ビューのインスタンスに束縛されます。また、実在しないコールバック関数名を指定すると、例外をスローします。
   *
   * @override
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
      "input .input-area__message-input": "_onInputMessage"
    });
  }

  /**
   * メッセージが入力されるたびに呼び出されるイベントハンドラ<br>
   * メッセージの行数に合わせて高さを調整します。4行以上になると高さをそれ以上に高くすることはありません<br>
   * 高さに変更があった場合は、高さを調整した後にInputView.CHANGE_HEIGHTイベントが発火します
   *
   * @method _onInputMessage
   * @protected
   * @return {void}
   */
  protected _onInputMessage(): void {
    var str: string = this.$(".input-area__message-input").val();
    var lineCount: number = str.split("\n").length;
    if (1 <= lineCount && lineCount <= 4) {
      this.$(".input-area__message-input").attr("rows", lineCount);
      this.trigger(InputView.CHANGE_HEIGHT);
    }
  }

}
export = InputView;
