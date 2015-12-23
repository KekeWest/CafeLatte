import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("./base/BaseView");
import SubViewOption = require("./base/SubViewOption");
import RightSidebarView = require("./contents/right_sidebar/RightSidebarView");
import ToggleSidebarView = require("./contents/toggle_sidebar/ToggleSidebarView");
import LeftColumnView = require("./contents/left_column/LeftColumnView");


class ApplicationView extends BaseView {

  protected _rightSidebarView: RightSidebarView;
  protected _toggleSidebarView: ToggleSidebarView;
  protected _leftColumnView: LeftColumnView;

  constructor(options?: any) {
    this.setElement($("#app-container"));
    this._template = JST["app"];
    this._subViews = [
      new SubViewOption({
        bind: "_rightSidebarView",
        view: new RightSidebarView(),
        selector: ".right-sidebar-container"
      }),
      new SubViewOption({
        bind: "_toggleSidebarView",
        view: new ToggleSidebarView(),
        selector: ".toggle-sidebar-container"
      }),
      new SubViewOption({
        bind: "_leftColumnView",
        view: new LeftColumnView(),
        selector: ".left-col-container"
      })
    ];

    super(options);
  }

  public render(): ApplicationView {
    super.render();
    this._setSidebar();
    return this;
  }

  protected _setSidebar(): void {
    this._toggleSidebarView.$el.simpleSidebar({
      opener: this._rightSidebarView.rightSidebarTopUtilView.$(".right-sidebar-top-util__togglebar-switch").selector,
      wrapper: ".main-container",
      ignore: ".dialog-container",
      sidebar: {
        align: "right",
        width: 200,
        css: {
          zIndex: 3000
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
