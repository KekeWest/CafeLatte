import Backbone = require("backbone");
import JST = require("jst");

import BaseView = require("../../base/BaseView");
import Mediator = require("../../../mediator/Mediator");
import ViewEvent = require("../../../event/ViewEvent");

import DialogOption = require("./DialogOption");

class DialogView extends BaseView {

  protected static _idNum: number = 0;

  protected _dialogId: string;

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
    if (!this._dialogId) {
      this._dialogId = DialogView._idNum.toString();
      DialogView._idNum++;
    }
    super(options);
  }

  protected _setEvents(): any {
    return _.extend(super._setEvents(), {
      "click .dialog__close-btn": "close"
    });
  }

  get dialogId(): string {
    return this._dialogId;
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
    this.$el.draggable({
      containment: "document",
      handle: this.$(".dialog__head"),
      cancel: ".dialog__close-btn"
    });
    return this;
  }

  protected _remove(): DialogView {
    this.$el.draggable("destroy");
    super.remove();
    return this;
  }

  public close(): void {
    this._remove();
    Mediator.mediator.trigger(ViewEvent.CLOSE_DIALOG, this);
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
