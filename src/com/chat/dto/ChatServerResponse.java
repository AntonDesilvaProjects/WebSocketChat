package com.chat.dto;

import org.springframework.stereotype.Component;

@Component
public class ChatServerResponse {
	
	private String messageSender;
	private String message;
	
	public String getMessageOrigin() {
		return messageSender;
	}
	public void setMessageOrigin(String messageOrigin) {
		this.messageSender = messageOrigin;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
