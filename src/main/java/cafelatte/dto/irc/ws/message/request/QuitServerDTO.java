package cafelatte.dto.irc.ws.message.request;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class QuitServerDTO extends ServerIdDTO {

	public String reason = null;

}


/*
{
"methodType":"quitServer",
"serverId":0,
"reason":null
}
*/