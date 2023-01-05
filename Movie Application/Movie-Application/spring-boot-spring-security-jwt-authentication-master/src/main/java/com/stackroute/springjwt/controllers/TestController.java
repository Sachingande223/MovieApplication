package com.stackroute.springjwt.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//It is a security concept that allows restricting the resources implemented in web browsers.
@CrossOrigin(origins = "*", maxAge = 3600)

/*It is used to create restful web services using spring mvc
 * It takes care of mapping reuests data to the defined request handler method.*/
@RestController
//It is used to make mappings more specific to http handler methods.
@RequestMapping("/api/test")
public class TestController {

	@GetMapping("/all")
	public String allAccess() {
		return "";
	}

	@GetMapping("/user")
	public String userAccess() {
		return "User logged successfully.";
	}

}
