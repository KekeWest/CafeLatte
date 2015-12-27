import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import SubViewOption = require("../../base/SubViewOption");


class AddServerView extends BaseView {

  constructor(options?: any) {
    this._template = JST["contents/symbol/add_server"];
    super(options);
  }

  protected _setEvents(): any {
    return {

    };
  }

}
export = AddServerView;
