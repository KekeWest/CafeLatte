package cafelatte.dto.irc.ws.message.response;

import cafelatte.dto.irc.ws.message.ServerIdDTO;

public class InputRawLineDTO extends ServerIdDTO {

	public String rawLine = null;

	public InputRawLineDTO() {
		this.methodType = "inputRawLine";
	}

}
