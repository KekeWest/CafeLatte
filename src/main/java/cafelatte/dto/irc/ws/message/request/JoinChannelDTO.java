package cafelatte.dto.irc.ws.message.request;

import cafelatte.dto.irc.ws.message.ChannelNameDTO;

public class JoinChannelDTO extends ChannelNameDTO {

	public String password = null;

}


/*
{
"methodType":"joinChannel",
"serverId":0,
"channel":"#test",
"password":null
}
*/