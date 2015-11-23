package cafelatte.dto.irc.ws.message;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class WSMessageDTO {

	public String methodType = null;

	public Integer statusCode = null;

	public String statusMessage = null;

}
