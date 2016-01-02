import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


/**
 * 右サイドバーにあるユーザーリストのViewクラス
 *
 * @class UserListView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class UserListView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/right_sidebar/user_list"];
    super(options);
  }

}
export = UserListView;
