import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


/**
 * 右サイドバーの上部にあるユーティリティViewクラス<br>
 * トグルサイドバーのトグルスイッチや設定ボタンなどが配置されています
 *
 * @class RightSidebarTopUtilView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class RightSidebarTopUtilView extends BaseView {

  /**
   * トグルサイドバーが開いているか<br>
   * 開いていればtrue、閉じていればfalse
   *
   * @property _openTogglebar
   * @protected
   * @type {boolean}
   */
  protected _openTogglebar: boolean;


  constructor(options: any = null) {
    this._template = JST["contents/right_sidebar/top_util"];
    this._openTogglebar = false;
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
      "click .right-sidebar-top-util__togglebar-switch": "changeTogglebarSwitch"
    });
  }

  /**
   * トグルサイドバーのトグルスイッチを押した時に呼ばれるイベントハンドラ<br>
   * トグルサイドバーの開閉状態に合わせてトグルスイッチの矢印の方向を変えます。
   * 引数を与えることにより矢印を任意の方向に変更することもできます
   *
   * @method changeTogglebarSwitch
   * @public
   * @param [state=null] {string} "left"を与えると左に、"right"を与えると右にトグルスイッチの矢印の方向を変えます。
   * 何も指定しなかった場合はトグルサイドバーの状態に合わせます
   * @return {void}
   */
  public changeTogglebarSwitch(state: string = null): void {
    if (state === "left") {
      this._openTogglebar = false;
    } else if (state === "right") {
      this._openTogglebar = true;
    } else {
      this._openTogglebar = !this._openTogglebar;
    }

    if (this._openTogglebar) {
      this.$(".right-sidebar-top-util__togglebar-switch").removeClass("left").addClass("right");
    } else {
      this.$(".right-sidebar-top-util__togglebar-switch").removeClass("right").addClass("left");
    }
  }

}
export = RightSidebarTopUtilView;
