import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ToggleSidebarTopUtilView extends BaseView {

  protected _openTogglebar: boolean;

  constructor(options?: any) {
    this._template = JST["contents/toggle_sidebar/top_util"];
    this._openTogglebar = false;
    super(options);
  }

  protected _setEvents(): any {
    return {

    };
  }

}
export = ToggleSidebarTopUtilView;
