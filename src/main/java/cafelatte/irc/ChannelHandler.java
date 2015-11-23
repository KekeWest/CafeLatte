package cafelatte.irc;

import cafelatte.dto.irc.ws.message.request.SendMessageDTO;

public class ChannelHandler extends CommonHandler {

	public ChannelHandler(RelayClient relayClient) {
		super(relayClient);
	}

	public void sendChannelMessage(SendMessageDTO dto) throws Exception {
		getChannel(dto.serverId, dto.channel).send().message(dto.message);
	}

}
