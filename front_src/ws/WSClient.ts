import Backbone = require("backbone");

class WSClient {

  protected static port: number = 9000;

  protected static url: string = "ws://" + location.hostname + ":" + WSClient.port + "/websocket";

  protected static ws: WebSocket = null;

  public static mediator: any;

  public static init(): void {
    this.mediator = {};
    _.extend(this.mediator, Backbone.Events);
  }

  public static connect(): void {
    if (this.ws !== null && this.ws.readyState !== WebSocket.CLOSED) {
      return;
    }
    this.ws = new WebSocket(this.url);
    this.setEventHandler();
  }

  protected static setEventHandler(): void {
    this.ws.onopen    = this.onOpen.bind(this);
    this.ws.onclose   = this.onClose.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onerror   = this.onError.bind(this);
  }

  protected static onOpen(event: Event): void {
    console.log("websocket open");
  }

  protected static onClose(event: CloseEvent): void {
    console.log("websocket close");
  }

  protected static onMessage(event: MessageEvent): void {
    console.log(event.data);
  }

  protected static onError(event: Event): void {
    console.log("websocket error");
  }

  public static sendAPI(dto: any): void {
    if (this.ws !== null && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(dto));
    }
  }

}
export = WSClient;
