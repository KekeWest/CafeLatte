package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class SentRawLineDTO extends ServerIdDTO {

	public String rawLine = null;

	public SentRawLineDTO() {
		this.methodType = "sentRawLine";
	}

}
