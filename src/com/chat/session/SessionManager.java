package com.chat.session;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class SessionManager {
	
	private Map<String, WebSocketSession> connectedSessions = Collections.synchronizedMap( 
			new HashMap<String,WebSocketSession>() );
	
	public SessionManager(){}
	
	public void addSession(WebSocketSession session)
	{
		this.connectedSessions.put( session.getId(), session );
	}
	
	public void removeSession(WebSocketSession session)
	{
		this.connectedSessions.remove( session.getId() );
	}
	
	public List<WebSocketSession> getCurrentSessions()
	{
		List<WebSocketSession> sessions = new ArrayList<WebSocketSession>();
		Iterator<String> keyItr = connectedSessions.keySet().iterator();
		while( keyItr.hasNext() )
		{
			sessions.add( connectedSessions.get( keyItr.next() ) );
		}
		return sessions;
	}
}
