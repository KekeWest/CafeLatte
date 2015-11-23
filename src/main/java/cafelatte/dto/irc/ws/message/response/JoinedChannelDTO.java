package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ChannelUserDTO;

public class JoinedChannelDTO extends ChannelUserDTO {

	public JoinedChannelDTO() {
		this.methodType = "JoinedChannel";
	}

}
