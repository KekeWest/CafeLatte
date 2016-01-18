package cafelatte.irc;

import org.pircbotx.Configuration;
import org.pircbotx.PircBotX;
import org.pircbotx.output.OutputIRC;

import cafelatte.CafeLatteApplication;
import cafelatte.domain.Server;
import cafelatte.dto.irc.ws.message.request.ConnectServerDTO;
import cafelatte.dto.irc.ws.message.request.JoinChannelDTO;
import cafelatte.dto.irc.ws.message.request.QuitServerDTO;
import cafelatte.service.ServerService;


public class ServerHandler extends CommonHandler {

	protected ServerService serverService;


	public ServerHandler(RelayClient relayClient) {
		super(relayClient);
		serverService = CafeLatteApplication.getContext().getBean(ServerService.class);
	}


	public void connectServer(ConnectServerDTO dto) {
		Server server = serverService.findOne(dto.serverId);
		Configuration config = new Configuration.Builder()
				.setSettingId(server.id)
				.setName(server.nickName)
				.addServer(server.serverAddr, server.serverPort)
				.addListener(relayClient.getIrcListener())
				.buildConfiguration();

		PircBotX bot = new PircBotX(config);
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
		OutputIRC outputIrc = getServer(dto.serverId).sendIRC();
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
