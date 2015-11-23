package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class ResponseServerIdDTO extends ServerIdDTO {

	public Integer id = null;

	public ResponseServerIdDTO() {
		this.methodType = "responseServerId";
	}

}
