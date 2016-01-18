package cafelatte.irc;

import java.io.IOException;

import org.pircbotx.exception.IrcException;
import org.pircbotx.hooks.ListenerAdapter;
import org.pircbotx.hooks.events.ConnectErrorEvent;
import org.pircbotx.hooks.events.ConnectEvent;
import org.pircbotx.hooks.events.DisconnectEvent;
import org.pircbotx.hooks.events.InputEvent;
import org.pircbotx.hooks.events.JoinEvent;
import org.pircbotx.hooks.events.MessageEvent;
import org.pircbotx.hooks.events.OutputEvent;
import org.pircbotx.hooks.events.PartEvent;
import org.pircbotx.hooks.types.GenericChannelEvent;
import org.pircbotx.hooks.types.GenericChannelUserEvent;

import cafelatte.dto.irc.ws.message.ChannelNameDTO;
import cafelatte.dto.irc.ws.message.ChannelUserDTO;
import cafelatte.dto.irc.ws.message.WSMessageDTO;
import cafelatte.dto.irc.ws.message.response.ConnectServerErrorDTO;
import cafelatte.dto.irc.ws.message.response.ConnectedServerDTO;
import cafelatte.dto.irc.ws.message.response.DisconnectedServerDTO;
import cafelatte.dto.irc.ws.message.response.InputRawLineDTO;
import cafelatte.dto.irc.ws.message.response.JoinedChannelDTO;
import cafelatte.dto.irc.ws.message.response.OutputRawLineDTO;
import cafelatte.dto.irc.ws.message.response.PartedChannelDTO;
import cafelatte.dto.irc.ws.message.response.ReceivedMessageDTO;

public class Listener extends ListenerAdapter {

	protected APIConverter apiConverter;

	public Listener(APIConverter apiConv) {
		apiConverter = apiConv;
	}

	@Override
	public void onConnectError(ConnectErrorEvent event) {
		ConnectServerErrorDTO dto = new ConnectServerErrorDTO();
		if (event.getException() instanceof IOException) {
			dto.statusCode = 4001;
		} else if (event.getException() instanceof IrcException) {
			dto.statusCode = 4011;
		}
		dto.statusMessage = event.getException().getMessage();
		dto.serverId = event.getBot().getSettingId();
		sendWSMessage(dto);

	}

	@Override
	public void onInput(InputEvent event) {
		InputRawLineDTO dto = new InputRawLineDTO();
		dto.serverId = event.getBot().getSettingId();
		dto.rawLine = event.getRawLine();
		sendWSMessage(dto);
	}

	@Override
	public void onOutput(OutputEvent event) {
		OutputRawLineDTO dto = new OutputRawLineDTO();
		dto.serverId = event.getBot().getSettingId();
		dto.rawLine = event.getRawLine();
		sendWSMessage(dto);
	}

	@Override
	public void onConnect(ConnectEvent event) {
		ConnectedServerDTO dto = new ConnectedServerDTO();
		dto.serverId = event.getBot().getSettingId();
		sendWSMessage(dto);
	}

	@Override
	public void onDisconnect(DisconnectEvent event) {
		DisconnectedServerDTO dto = new DisconnectedServerDTO();
		dto.serverId = event.getBot().getSettingId();
		sendWSMessage(dto);
	}

	@Override
	public void onJoin(JoinEvent event) {
		JoinedChannelDTO dto = new JoinedChannelDTO();
		setChannelUserDTO(dto, event);
		sendWSMessage(dto);
	}

	@Override
	public void onPart(PartEvent event) {
		PartedChannelDTO dto = new PartedChannelDTO();
		setChannelUserDTO(dto, event);
		sendWSMessage(dto);
	}

	@Override
	public void onMessage(MessageEvent event) {
		ReceivedMessageDTO dto = new ReceivedMessageDTO();
		setChannelNameDTO(dto, event);
		dto.user = event.getUser().getNick();
		dto.message = event.getMessage();
		sendWSMessage(dto);
	}

	protected void sendWSMessage(WSMessageDTO dto) {
		apiConverter.sendWSMessage(dto);
	}

	protected void setChannelNameDTO(ChannelNameDTO dto, GenericChannelEvent event) {
		dto.serverId = event.getBot().getSettingId();
		dto.channel = event.getChannel().getName();
	}

	protected void setChannelUserDTO(ChannelUserDTO dto, GenericChannelUserEvent event) {
		setChannelNameDTO(dto, event);
		dto.nickName = event.getUser().getNick();
	}

}
