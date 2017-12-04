package com.chat.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatAdminController {
	
	@RequestMapping(value="/rest/sayHello", method=RequestMethod.GET)
	@ResponseBody
	public String sayHello()
	{
		return "Hello";
	}

}
