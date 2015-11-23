package cafelatte.dto.irc.ws.message.request;

import cafelatte.dto.irc.ws.message.ChannelNameDTO;

public class SendMessageDTO extends ChannelNameDTO {

	public String message = null;

}


/*
{
"methodType":"sendChannelMessage",
"serverId":0,
"channel":"#test",
"message":"Hello World!!"
}
*/