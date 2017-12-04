package com.chat.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import com.chat.dto.ChatClientRequest;
import com.chat.dto.ChatServerResponse;
import com.google.gson.Gson;

@Service
public class ChatService {
	
	Gson jsonConverter = new Gson();
	
	public ChatService(){}
	
	public void broadcastMessage(ChatClientRequest clientMessage, List<WebSocketSession> clients)
	{
		ChatServerResponse response = new ChatServerResponse();
		response.setMessageOrigin( clientMessage.getClientName() );
		response.setMessage( clientMessage.getMessage() );
		
		String jsonResponse = jsonConverter.toJson( response );
		
		System.out.println("Broadcasting --> " + response.getMessageOrigin() + " : " + response.getMessage() );
		
		WebSocketMessage<String> message = new TextMessage( jsonResponse );
		for(WebSocketSession client : clients)
		{
			try {
				client.sendMessage(message);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
