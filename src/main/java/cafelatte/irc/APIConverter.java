package cafelatte.irc;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import cafelatte.dto.irc.ws.message.WSMessageDTO;
import cafelatte.dto.irc.ws.message.request.ConnectServerDTO;
import cafelatte.dto.irc.ws.message.request.JoinChannelDTO;
import cafelatte.dto.irc.ws.message.request.QuitServerDTO;
import cafelatte.dto.irc.ws.message.request.SendMessageDTO;


public class APIConverter {

	protected WebSocketSession wsSession;
	protected RelayClient ircRelay;
	protected ObjectMapper objMapper;


	public APIConverter(WebSocketSession session) {
		wsSession = session;
		ircRelay = new RelayClient(this);
		objMapper = new ObjectMapper();
	}

	public void exit() {
		ircRelay.exit();
	}

	public void sendWSMessage(WSMessageDTO dto) {
		if (!wsSession.isOpen()) return;
		try {

			String jsonStr = objMapper.writeValueAsString(dto);
			wsSession.sendMessage(new TextMessage(jsonStr));

		} catch (IllegalStateException iex) {
			if (iex.getMessage().equals("The remote endpoint was in state [TEXT_PARTIAL_WRITING] which is an invalid state for called method")) {
				sendWSMessage(dto);
			} else {
				iex.printStackTrace();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public void receiveWSMessage(String jsonStr) throws Exception {
		String apiType = objMapper.readValue(jsonStr, JsonNode.class).get("methodType").asText();

		switch (apiType) {
		case "connectServer":
			ircRelay.server.connectServer(objMapper.readValue(jsonStr, ConnectServerDTO.class));
			break;
		case "quitServer":
			ircRelay.server.quitServer(objMapper.readValue(jsonStr, QuitServerDTO.class));
			break;
		case "joinChannel":
			ircRelay.server.joinChannel(objMapper.readValue(jsonStr, JoinChannelDTO.class));
			break;
		case "sendChannelMessage":
			ircRelay.channel.sendChannelMessage(objMapper.readValue(jsonStr, SendMessageDTO.class));
			break;
		default:

		}
	}

}