package com.chat;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

import com.chat.dto.ChatClientRequest;
import com.chat.rest.ChatAdminController;
import com.chat.service.ChatService;
import com.chat.session.SessionManager;
import com.chat.websocket.WebSocketConfig;

@Configuration
@ComponentScan(basePackageClasses={BaseConfig.class, ChatClientRequest.class,ChatAdminController.class,ChatService.class,SessionManager.class,WebSocketConfig.class})
@EnableWebMvc
@EnableWebSocket
public class BaseConfig {
	//Initialize Spring
}
