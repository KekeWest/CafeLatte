package cafelatte.irc;

import java.util.Timer;
import java.util.TimerTask;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import lombok.Getter;


public class RelayClient {

	private static final Logger logger = LoggerFactory.getLogger(RelayClient.class);

	@Getter
	protected APIConverter apiConverter;

	@Getter
	protected Config ircConfig;

	@Getter
	protected MultiBotManager serverManager;

	@Getter
	protected Listener ircListener;

	protected Timer pongTimer;

	public ServerHandler server;

	public ChannelHandler channel;


	public RelayClient(APIConverter apiConv) {
		apiConverter = apiConv;
		ircListener = new Listener(apiConverter);
		ircConfig = new Config();

		serverManager = new MultiBotManager(ircListener);
		serverManager.start();

		server = new ServerHandler(this);
		channel = new ChannelHandler(this);

		pongTimer = new Timer();
		RelayClient me = this;
		pongTimer.schedule(new TimerTask() {
			public void run() {
				me.server.sendPong();
			}
		}, 0, ircConfig.pongInterval * 1000);
	}


	@Override
	protected void finalize() throws Throwable {
		try {
			super.finalize();
		} finally {
			this.exit();
		}
	}


	public void exit() {
		pongTimer.cancel();
		serverManager.stop();
	}

}
