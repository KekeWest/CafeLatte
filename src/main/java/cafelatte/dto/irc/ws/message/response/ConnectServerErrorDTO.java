package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class ConnectServerErrorDTO extends ServerIdDTO {

	public ConnectServerErrorDTO() {
		this.methodType = "connectServerError";
	}

}
