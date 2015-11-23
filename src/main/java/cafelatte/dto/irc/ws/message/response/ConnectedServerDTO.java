package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class ConnectedServerDTO extends ServerIdDTO {

	public ConnectedServerDTO() {
		this.methodType = "connectedServer";
	}

}
