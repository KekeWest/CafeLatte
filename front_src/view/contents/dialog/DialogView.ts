import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");

import DialogOption = require("./DialogOption");

class DialogView extends BaseView {

  protected _dialogOption: DialogOption;

  protected static _defaultOption(): DialogOption {
    return {
      title: "",
      width: "auto",
      height: "auto",
      top: null,
      left: null,
      modal: false,
      container: null
    };
  }

  constructor(options: DialogOption = {container: null}) {
    this.tagName = "div";
    if (!this.className) {
      this.className = "dialog";
    }
    if (!this._dialogOption) {
      this._dialogOption = _.extend(DialogView._defaultOption(), options);
    } else {
      this._dialogOption = _.extend(DialogView._defaultOption(), this._dialogOption, options);
    }
    super();
  }

  public render(options?: DialogOption): DialogView {
    if (options) {
      this._dialogOption = _.extend(this._dialogOption, options);
    }
    super.render({
      data: {
        dialogTitle: this._dialogOption.title
      },
      $append: this._dialogOption.container
    });
    this._resize();
    this._adjustPosition();
    return this;
  }

  protected _resize(): void {
    this.$el.height(this._dialogOption.height);
    this.$el.width(this._dialogOption.width);
  }

  protected _adjustPosition(): void {
    if (!this._dialogOption.top) {
      this._dialogOption.top = Math.round(($(window).height() - this.$el.height()) / 2.0);
    }
    if (!this._dialogOption.left) {
      this._dialogOption.left = Math.round(($(window).width() - this.$el.width()) / 2.0);
    }
    this.$el.css({
      top: this._dialogOption.top,
      left: this._dialogOption.left
    });
  }

}
export = DialogView;
