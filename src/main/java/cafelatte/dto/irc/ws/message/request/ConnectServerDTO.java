package cafelatte.dto.irc.ws.message.request;

import cafelatte.dto.irc.ws.message.WSMessageDTO;

public class ConnectServerDTO extends WSMessageDTO {

	public Integer id = null;

	public String nickName = null;

	public String serverAddr = null;

	public Integer serverPort = null;

}


/*
{
"methodType":"connectServer",
"id":0,
"nickName":"hoge",
"serverAddr":"192.168.1.21",
"serverPort":6667
}
*/