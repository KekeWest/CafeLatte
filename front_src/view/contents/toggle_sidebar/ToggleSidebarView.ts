import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ToggleSidebarView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/toggle_sidebar/toggle_sidebar"];
    super(options);
  }
}
export = ToggleSidebarView;
