import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import RightSidebarTopUtilView = require("./RightSidebarTopUtilView");
import ChannelListView = require("./ChannelListView");
import UserListView = require("./UserListView");


/**
 * 右サイドバーのViewクラス<br>
 * 右サイドバー上部のユーティリティView、チャンネルリストView、ユーザーリストViewを子Viewとして持ち管理しています
 *
 * @class RightSidebarView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class RightSidebarView extends BaseView {

  /**
   * 右サイドバー上部のユーティリティView
   *
   * @property _rightSidebarTopUtilView
   * @protected
   * @type {RightSidebarTopUtilView}
   */
  protected _rightSidebarTopUtilView: RightSidebarTopUtilView;

  /**
   * チャンネルリストView
   *
   * @property _channelListView
   * @protected
   * @type {ChannelListView}
   */
  protected _channelListView: ChannelListView;

  /**
   * ユーザーリストView
   *
   * @property _userListView
   * @protected
   * @type {UserListView}
   */
  protected _userListView: UserListView;


  constructor(options: any = null) {
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

  /**
   * _rightSidebarTopUtilViewのゲッター
   *
   * @method rightSidebarTopUtilView
   * @return {RightSidebarTopUtilView} _rightSidebarTopUtilViewに入っているインスタンス
   */
  get rightSidebarTopUtilView(): RightSidebarTopUtilView {
    return this._rightSidebarTopUtilView;
  }

}
export = RightSidebarView;
