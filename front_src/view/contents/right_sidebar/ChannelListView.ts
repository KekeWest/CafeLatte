import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");

/**
 * 右サイドバーにあるチャンネルリストのViewクラス
 *
 * @class ChannelListView
 * @extends BaseView
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class ChannelListView extends BaseView {

  constructor(options: any = null) {
    this._template = JST["contents/right_sidebar/channel_list"];
    super(options);
  }

  /**
   * Viewをレンダリングします
   *
   * @override
   * @method render
   * @public
   * @return {ChannelListView} 自身のインスタンス
   */
  public render(): ChannelListView {
    super.render();
    this.$(".channels").mCustomScrollbar({
      axis: "y",
      scrollInertia: 0,
      autoDraggerLength: true,
      autoHideScrollbar: true
    });
    return this;
  }

}
export = ChannelListView;
