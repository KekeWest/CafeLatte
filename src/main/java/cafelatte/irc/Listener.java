package cafelatte.irc;

import org.pircbotx.PircBotX;
import org.pircbotx.exception.IrcException;
import org.pircbotx.hooks.ListenerAdapter;
import org.pircbotx.hooks.events.ConnectEvent;
import org.pircbotx.hooks.events.DisconnectEvent;
import org.pircbotx.hooks.events.JoinEvent;
import org.pircbotx.hooks.events.MessageEvent;
import org.pircbotx.hooks.events.PartEvent;
import org.pircbotx.hooks.types.GenericChannelEvent;
import org.pircbotx.hooks.types.GenericChannelUserEvent;

import cafelatte.dto.irc.ws.message.ChannelNameDTO;
import cafelatte.dto.irc.ws.message.ChannelUserDTO;
import cafelatte.dto.irc.ws.message.WSMessageDTO;
import cafelatte.dto.irc.ws.message.request.ConnectServerDTO;
import cafelatte.dto.irc.ws.message.response.ConnectServerErrorDTO;
import cafelatte.dto.irc.ws.message.response.ConnectedServerDTO;
import cafelatte.dto.irc.ws.message.response.DisconnectedServerDTO;
import cafelatte.dto.irc.ws.message.response.JoinedChannelDTO;
import cafelatte.dto.irc.ws.message.response.PartedChannelDTO;
import cafelatte.dto.irc.ws.message.response.ReceivedMessageDTO;
import cafelatte.dto.irc.ws.message.response.ResponseServerIdDTO;

public class Listener extends ListenerAdapter<PircBotX> {

	protected APIConverter apiConverter;

	public Listener(APIConverter apiConv) {
		apiConverter = apiConv;
	}

	public void responseServerId(ConnectServerDTO reqDto, PircBotX bot) {
		ResponseServerIdDTO resDto = new ResponseServerIdDTO();
		resDto.id = reqDto.id;
		resDto.serverId = bot.getBotId();
		sendWSMessage(resDto);
	}

	public void connectServerError(Exception ex, PircBotX bot) {
		ConnectServerErrorDTO dto = new ConnectServerErrorDTO();
		dto.statusCode = 4001;
		dto.statusMessage = ex.getMessage();
		dto.serverId = bot.getBotId();
		sendWSMessage(dto);
	}

	public void connectServerError(IrcException ex, PircBotX bot) {
		ConnectServerErrorDTO dto = new ConnectServerErrorDTO();
		dto.statusCode = 4011;
		dto.statusMessage = ex.getMessage();
		dto.serverId = bot.getBotId();
		sendWSMessage(dto);
	}

	@Override
	public void onConnect(ConnectEvent<PircBotX> event) {
		ConnectedServerDTO dto = new ConnectedServerDTO();
		dto.serverId = event.getBot().getBotId();
		sendWSMessage(dto);
	}

	@Override
	public void onDisconnect(DisconnectEvent<PircBotX> event) {
		DisconnectedServerDTO dto = new DisconnectedServerDTO();
		dto.serverId = event.getBot().getBotId();
		sendWSMessage(dto);
	}

	@Override
	public void onJoin(JoinEvent<PircBotX> event) {
		JoinedChannelDTO dto = new JoinedChannelDTO();
		setChannelUserDTO(dto, event);
		sendWSMessage(dto);
	}

	@Override
	public void onPart(PartEvent<PircBotX> event) {
		PartedChannelDTO dto = new PartedChannelDTO();
		setChannelUserDTO(dto, event);
		sendWSMessage(dto);
	}

	@Override
	public void onMessage(MessageEvent<PircBotX> event) {
		ReceivedMessageDTO dto = new ReceivedMessageDTO();
		setChannelNameDTO(dto, event);
		dto.user = event.getUser().getNick();
		dto.message = event.getMessage();
		sendWSMessage(dto);
	}

	protected void sendWSMessage(WSMessageDTO dto) {
		apiConverter.sendWSMessage(dto);
	}

	protected void setChannelNameDTO(ChannelNameDTO dto, GenericChannelEvent<PircBotX> event) {
		dto.serverId = event.getBot().getBotId();
		dto.channel = event.getChannel().getName();
	}

	protected void setChannelUserDTO(ChannelUserDTO dto, GenericChannelUserEvent<PircBotX> event) {
		setChannelNameDTO(dto, event);
		dto.nickName = event.getUser().getNick();
	}

}
