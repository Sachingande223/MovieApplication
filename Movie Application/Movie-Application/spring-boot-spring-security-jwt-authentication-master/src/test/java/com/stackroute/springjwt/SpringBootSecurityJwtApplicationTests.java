package com.stackroute.springjwt;

import com.stackroute.springjwt.models.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootSecurityJwtApplicationTests {

	@Test
	public void getUserName() {
		User user = new User("Amit", "amit@gmail.com", "Amit123*");
		String uName = user.getUsername();
		assertEquals("Amit", uName);
	}

	@Test
	public void getUserEmail() {
		User user = new User("Amit", "amit@gmail.com", "Amit123*");
		String uEmail = user.getEmail();
		assertEquals("amit@gmail.com", uEmail);
	}

	@Test
	public void getUserPassword() {
		User user = new User("Amit", "amit@gmail.com", "Amit123*");
		String uPassword = user.getPassword();
		assertEquals("Amit123*", uPassword);
	}
}
