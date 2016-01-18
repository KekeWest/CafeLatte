import Backbone = require("backbone");

import WSClient = require("../ws/WSClient");

import BaseModel = require("./base/BaseModel");

class ServerModel extends BaseModel {

  constructor(attributes?: any, options?: any) {
    this._listenTo();
    super(attributes, options);
  }

  public defaults(): any {
    return {
      settingName: "",
      serverAddr: "",
      serverPort: 6667,
      nickName: ""
    };
  }

  protected validation(): any {
    return {
      settingName: {
        required: true
      },
      serverAddr: {
        required: true
      },
      serverPort: {
        range: [0, 65535]
      },
      nickName: {
        required: true
      }
    };
  }

  protected _listenTo(): void {
    this.listenTo(this, "error", this._onError.bind(this));
    this.listenTo(this, "sync", this._onSync.bind(this));
  }

  protected _onSync(): void {
    this.connect();
  }

  public connect(): void {
    var connectServerDTO: ConnectServerDTO = {
      methodType: "connectServer",
      serverId: this.id
    };
    WSClient.sendAPI(connectServerDTO);
  }

  protected _onError(model?: ServerModel, jqxhr?: JQueryXHR, options?: any): void {
    if (!this.id) {
      this.destroy();
    }
  }

  public destroy(options?: Backbone.ModelDestroyOptions): any {
    this.trigger("destroy", this);
  }

}
export = ServerModel;
