import Backbone = require("backbone");
import JST = require("jst");

import CommonUtil = require("../../../util/CommonUtil");
import Mediator = require("../../../mediator/Mediator");

import CollectionManager = require("../../../collection/CollectionManager");

import ServerModel = require("../../../model/ServerModel");

import BaseView = require("../../base/BaseView");
import RenderOption = require("../../base/RenderOption");
import SubViewOption = require("../../base/SubViewOption");


class AddServerView extends BaseView {

  constructor(options?: any) {
    this.collection = CollectionManager.serverCollection;
    if (!(options && options.model)) {
      this.model = new ServerModel();
    }
    this._bindValidation({
      forceUpdate: true,
      valid: this._valid.bind(this),
      invalid: this._invalid.bind(this)
    });
    this._template = JST["contents/symbol/add_server"];
    super(options);
  }

  protected _setEvents(): any {
    return _.extend(super._setEvents(), {
      "click .add-server__ok-button": "_onOK"
    });
  }

  /**
   * stickitのバインディング設定をセットするためのメソッド
   *
   * @method _setBindings
   * @protected
   * @return {any} バインディング設定
   */
  protected bindings(): any {
    return {
      "input[name=settingName]": {
        observe: "settingName",
        setOptions: {
          validate: true
        }
      },
      "input[name=serverAddr]": {
        observe: "serverAddr",
        setOptions: {
          validate: true
        }
      },
      "input[name=serverPort]": {
        observe: "serverPort",
        getVal: this._onChangeServerPortInput.bind(this),
        setOptions: {
          validate: true
        }
      },
      "input[name=nickName]": {
        observe: "nickName",
        setOptions: {
          validate: true
        }
      }
    };
  }

  public render(options: RenderOption = {}): AddServerView {
    super.render(options);
    this.stickit();
    return this;
  }

  protected _onOK(): void {
    if (this.model.isValid(true)) {
      this.collection.add(this.model);
      this.model.save();
      Mediator.mediator.trigger(Mediator.ViewEvent.END_ADD_SERVER, this);
    }
  }

  protected _onChangeServerPortInput($el: JQuery, event: Event, options: any): number {
    var inputStr: string = $el.val(),
        portNum: number = CommonUtil.strToUnsignedNum(inputStr);

    return portNum;
  }

  protected _valid(view: AddServerView, attr: string, selector: string): void {
    console.log(attr + " valid");
  }

  protected _invalid(view: AddServerView, attr: string, selector: string): void {
    console.log(attr + " invalid");
  }

}
export = AddServerView;
