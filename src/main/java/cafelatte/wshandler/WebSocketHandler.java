package cafelatte.wshandler;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import cafelatte.irc.APIConverter;


@Component
public class WebSocketHandler extends TextWebSocketHandler {

	protected ConcurrentHashMap<String, APIConverter> connectorPool = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.connectorPool.put(session.getId(), new APIConverter(session));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status)
    		throws Exception {
    	this.connectorPool.get(session.getId()).exit();
        this.connectorPool.remove(session.getId());
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
    	try {
    		this.connectorPool.get(session.getId()).receiveWSMessage(message.getPayload());
    	} catch(Exception ex) {
    		ex.printStackTrace();
    	}
    }
}