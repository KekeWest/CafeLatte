package cafelatte.irc;

import org.pircbotx.Configuration;
import org.pircbotx.PircBotX;
import org.pircbotx.output.OutputIRC;

import cafelatte.dto.irc.ws.message.request.ConnectServerDTO;
import cafelatte.dto.irc.ws.message.request.JoinChannelDTO;
import cafelatte.dto.irc.ws.message.request.QuitServerDTO;

public class ServerHandler extends CommonHandler {


	public ServerHandler(RelayClient relayClient) {
		super(relayClient);
	}


	public void connectServer(ConnectServerDTO dto) {
		Configuration config = new Configuration.Builder()
				.setName(dto.nickName)
				.addServer(dto.serverAddr, dto.serverPort)
				.addListener(relayClient.getIrcListener())
				.buildConfiguration();

		PircBotX bot = new PircBotX(config);
		relayClient.getIrcListener().responseServerId(dto, bot);
		relayClient.getServerManager().addBot(bot);
	}


	public void quitServer(QuitServerDTO dto) {
		if (dto.reason == null) {
			getServer(dto.serverId).sendIRC().quitServer();
		} else {
			getServer(dto.serverId).sendIRC().quitServer(dto.reason);
		}
	}


	public void joinChannel(JoinChannelDTO dto) throws Exception {
		OutputIRC outputIrc = relayClient.getServerManager().getBotById(dto.serverId).sendIRC();
		if (dto.password != null) {
			outputIrc.joinChannel(dto.channel, dto.password);
		} else {
			outputIrc.joinChannel(dto.channel);
		}
	}


	public void sendPong() {
		for (PircBotX bot : relayClient.getServerManager().getBots()) {
			if (bot.isConnected()) {
				bot.sendRaw().rawLine(String.format("PONG :%s", bot.getServerInfo().getServerName()));
			}
		}
	}

}
