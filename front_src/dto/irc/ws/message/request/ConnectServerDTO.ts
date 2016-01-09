interface ConnectServerDTO extends WSMessageDTO {
  id: number;
  nickName: string;
  serverAddr: string;
  serverPort: number;
}
