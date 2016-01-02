import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");

/**
 * グローバルメッセージリストViewクラス<br>
 * 自分が入っている全チャンネル（または全ユーザ）からのメッセージすべてを表示するためのViewです
 *
 * @class GlobalMessageListView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class GlobalMessageListView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/left_column/chat/global_messagelist"];
    super(options);
  }

}
export = GlobalMessageListView;
