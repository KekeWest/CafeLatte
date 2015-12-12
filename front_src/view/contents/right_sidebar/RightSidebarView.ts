import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import ChannelListView = require("./ChannelListView");
import UserListView = require("./UserListView");

class RightSidebarView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/right_sidebar"];
    this._subViews = [
      new SubViewOption({
        bind: "channelListView",
        view: new ChannelListView(),
        selector: ".channel-list-container"
      }),
      new SubViewOption({
        bind: "userListView",
        view: new UserListView(),
        selector: ".user-list-container"
      })
    ];
    super(options);
  }

}
export = RightSidebarView;
