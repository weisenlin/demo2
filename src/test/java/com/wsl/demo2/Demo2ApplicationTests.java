package com.wsl.demo2;

import com.wsl.demo.Demo2Application;
import com.wsl.demo.model.User;
import com.wsl.demo.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Demo2Application.class)
public class Demo2ApplicationTests {
	@Autowired
	private UserService userService;
	@Test
	public void contextLoads() {
	}

	@Test
	public void testService(){
		User user = userService.getEntity("1");
		System.out.println(user.getUsername());
	}

}
