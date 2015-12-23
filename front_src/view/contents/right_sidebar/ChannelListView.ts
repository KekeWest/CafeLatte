import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");


class ChannelListView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/right_sidebar/channel_list"];
    super(options);
  }

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
