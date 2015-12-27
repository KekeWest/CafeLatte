import BaseView = require("./BaseView");


interface SubViewOption {
  bind?: string;
  view: BaseView;
  selector?: string;
}
export = SubViewOption;
