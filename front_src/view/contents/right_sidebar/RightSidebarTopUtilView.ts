import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class RightSidebarTopUtilView extends BaseView {

  protected _openTogglebar: boolean;

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/top_util"];
    this._openTogglebar = false;
    super(options);
  }

  protected _setEvents(): any {
    return _.extend(super._setEvents(), {
      "click .right-sidebar-top-util__togglebar-switch": "changeTogglebarSwitch"
    });
  }

  public changeTogglebarSwitch(state: string): void {
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
