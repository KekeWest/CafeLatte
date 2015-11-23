package cafelatte.irc;

import org.pircbotx.Channel;
import org.pircbotx.PircBotX;
import org.pircbotx.User;

import cafelatte.dto.irc.ws.message.WSMessageDTO;

public class CommonHandler {

	protected RelayClient relayClient;

	public CommonHandler(RelayClient rClient) {
		relayClient = rClient;
	}

	protected void sendWSMessage(WSMessageDTO dto) {
		relayClient.getApiConverter().sendWSMessage(dto);
	}


	protected PircBotX getServer(Integer serverId) {
		return relayClient.getServerManager().getBotById(serverId);
	}


	protected Channel getChannel(Integer serverId, String name) {
		return getServer(serverId).getUserChannelDao().getChannel(name);
	}


	protected User getUser(Integer serverId, String nick) {
		return getServer(serverId).getUserChannelDao().getUser(nick);
	}

}
