import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import RightSidebarTopUtilView = require("./RightSidebarTopUtilView");
import ChannelListView = require("./ChannelListView");
import UserListView = require("./UserListView");

class RightSidebarView extends BaseView {

  protected _rightSidebarTopUtilView: RightSidebarTopUtilView;
  protected _channelListView: ChannelListView;
  protected _userListView: UserListView;

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/right_sidebar"];
    this._subViews = [
      {
        bind: "_rightSidebarTopUtilView",
        view: new RightSidebarTopUtilView(),
        selector: ".top-util-container"
      },
      {
        bind: "_channelListView",
        view: new ChannelListView(),
        selector: ".channel-list-container"
      },
      {
        bind: "_userListView",
        view: new UserListView(),
        selector: ".user-list-container"
      }
    ];
    super(options);
  }

  get rightSidebarTopUtilView(): RightSidebarTopUtilView {
    return this._rightSidebarTopUtilView;
  }

}
export = RightSidebarView;
