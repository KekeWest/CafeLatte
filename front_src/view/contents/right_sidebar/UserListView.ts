import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class UserListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/user_list"];
    super(options);
  }

}
export = UserListView;
