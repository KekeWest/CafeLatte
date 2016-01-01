import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("./base/BaseView");
import SubViewOption = require("./base/SubViewOption");
import Mediator = require("../mediator/Mediator");
import ViewEvent = require("../event/ViewEvent");
import RightSidebarView = require("./contents/right_sidebar/RightSidebarView");
import ToggleSidebarView = require("./contents/toggle_sidebar/ToggleSidebarView");
import LeftColumnView = require("./contents/left_column/LeftColumnView");
import DialogsView = require("./contents/dialog/DialogsView");


/**
 * アプリケーションのメインのViewクラス<br>
 * 他のViewを子Viewとして保持して管理しています
 *
 * @class ApplicationView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 *
 */
class ApplicationView extends BaseView {

  /**
   * 右サイドバーのView
   *
   * @property _rightSidebarView
   * @protected
   * @type {RightSidebarView}
   */
  protected _rightSidebarView: RightSidebarView;

  /**
   * 右トグルサイドバーのView
   *
   * @property _toggleSidebarView
   * @protected
   * @type {ToggleSidebarView}
   */
  protected _toggleSidebarView: ToggleSidebarView;

  /**
   * 左カラムのView
   *
   * @property _leftColumnView
   * @protected
   * @type {LeftColumnView}
   */
  protected _leftColumnView: LeftColumnView;


  constructor(options: any = null) {
    this.setElement($("#app-container"));
    this._template = JST["app"];
    this._subViews = [
      {
        bind: "_rightSidebarView",
        view: new RightSidebarView(),
        selector: ".right-sidebar-container"
      },
      {
        bind: "_toggleSidebarView",
        view: new ToggleSidebarView(),
        selector: ".toggle-sidebar-container"
      },
      {
        bind: "_leftColumnView",
        view: new LeftColumnView(),
        selector: ".left-col-container"
      },
      {
        bind: "_dialogsView",
        view: new DialogsView(),
        selector: ".dialog-container"
      }
    ];

    super(options);
  }

  /**
   * Viewをレンダリングします<br>
   * 自身と子Viewをレンダリングした後、simpleSidebarを使って右トグルサイドバーがトグルできるようにセッティングします
   *
   * @override
   * @method render
   * @public
   * @return {ApplicationView} 自身であるViewインスタンス
   */
  public render(): ApplicationView {
    super.render();
    this._setToggleSidebar();
    return this;
  }

  /**
   * 右トグルサイドバーがトグルできるようにsimpleSidebarを使ってセッテイングします
   *
   * @method _setToggleSidebar
   * @protected
   * @return {void}
   */
  protected _setToggleSidebar(): void {
    this._toggleSidebarView.$el.simpleSidebar({
      opener: this._rightSidebarView.rightSidebarTopUtilView.$(".right-sidebar-top-util__togglebar-switch").selector,
      wrapper: ".main-container",
      ignore: ".dialog-container",
      sidebar: {
        align: "right",
        width: 200,
        css: {
          zIndex: 0
        }
      },
      animation: {
        duration: 400,
        easing: "easeOutExpo"
      },
      mask: {
        display: false
      }
    });
  }

}
export = ApplicationView;
