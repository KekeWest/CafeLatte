package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ChannelNameDTO;

public class ReceivedMessageDTO extends ChannelNameDTO {

	public String user = null;

	public String message = null;

	public ReceivedMessageDTO() {
		this.methodType = "onMessage";
	}

}
