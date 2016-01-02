import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");

import ToggleSidebarTopUtilView = require("./ToggleSidebarTopUtilView");
import ServerListView = require("./ServerListView");


/**
 * 右トグルサイドバーのViewクラス<br>
 * 右トグルサイドバー上部のユーティリティView、サーバーリストViewを子Viewとして持ち管理しています
 *
 * @class ToggleSidebarView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class ToggleSidebarView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/toggle_sidebar/toggle_sidebar"];
    this._subViews = [
      {
        bind: "_toggleSidebarTopUtilView",
        view: new ToggleSidebarTopUtilView(),
        selector: ".top-util-container"
      },
      {
        bind: "_serverListView",
        view: new ServerListView(),
        selector: ".server-list-container"
      }
    ];
    super(options);
  }
}
export = ToggleSidebarView;
