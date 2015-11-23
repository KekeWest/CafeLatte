package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ChannelUserDTO;

public class PartedChannelDTO extends ChannelUserDTO {

	public PartedChannelDTO() {
		this.methodType = "partedChannel";
	}

}
