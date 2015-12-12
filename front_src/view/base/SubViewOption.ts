import BaseView = require("./BaseView");


class SubViewOption {

  public bind: string;

  public view: BaseView;

  public selector: string;

  constructor(args: {bind: string; view: BaseView; selector?: string; }) {
    this.bind = args.bind;
    this.view = args.view;
    this.selector = args.selector;
  }
}
export = SubViewOption;
