package com.chat.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.chat.dto.ChatClientRequest;
import com.chat.service.ChatService;
import com.chat.session.SessionManager;
import com.google.gson.Gson;

@Component
public class ChatSocketHandler extends TextWebSocketHandler {
	
	ChatService chatService = new ChatService();
	SessionManager sessionManager = new SessionManager();
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message)
	{
		ChatClientRequest clientRequestMsg = new Gson().fromJson( message.getPayload(), ChatClientRequest.class );
		chatService.broadcastMessage( clientRequestMsg , sessionManager.getCurrentSessions() );
	}
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session)
	{
		System.out.println("Connection Established w/: " + session);
		sessionManager.addSession( session );
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception 
	{
		if( session == null ) 
			return;
		
		sessionManager.removeSession( session );
		if( status.getCode() == 1000 )
		{
			System.out.println(session + " terminated succesfully.");
		}
		else
		{
			System.out.println(session + " ended abnormally(status code: " + status.getCode() + ")" );
		}
	}
}
