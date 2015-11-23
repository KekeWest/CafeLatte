package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class DisconnectedServerDTO extends ServerIdDTO {

	public DisconnectedServerDTO() {
		this.methodType = "disconnectedServer";
	}

}
