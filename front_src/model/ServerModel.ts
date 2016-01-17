import Backbone = require("backbone");

import BaseModel = require("./base/BaseModel");

class ServerModel extends BaseModel {

  public url: string;

  constructor(attributes?: any, options?: any) {
    this.url = "/server";
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

  public destroy(): void {
    this.trigger("destroy", this);
  }

}
export = ServerModel;
