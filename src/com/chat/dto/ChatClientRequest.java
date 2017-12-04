package com.chat.dto;

import org.springframework.stereotype.Component;

@Component
public class ChatClientRequest {
	
	private String clientName;
	private String message;
	
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
