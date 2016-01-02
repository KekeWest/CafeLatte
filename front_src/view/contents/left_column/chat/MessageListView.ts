import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../../base/BaseView");


/**
 * メッセージリストのViewクラス<br>
 * 左カラムにある相手のメッセージを表示する部分で、現在入っているチャンネル（またはユーザ）からのメッセージを表示します
 *
 * @class MessageListView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class MessageListView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/left_column/chat/messagelist"];
    super(options);
  }

}
export = MessageListView;
