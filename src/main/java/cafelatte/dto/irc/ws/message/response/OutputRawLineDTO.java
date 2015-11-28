package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class OutputRawLineDTO extends ServerIdDTO {

	public String rawLine = null;

	public OutputRawLineDTO() {
		this.methodType = "outputRawLine";
	}

}
