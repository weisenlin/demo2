package com.wsl.demo2;

import com.wsl.demo.Demo2Application;
import com.wsl.demo.mapper.OperationMapper;
import com.wsl.demo.model.Enterprise;
import com.wsl.demo.model.Module;
import com.wsl.demo.model.Operation;
import com.wsl.demo.model.User;
import com.wsl.demo.service.EnterpriseService;
import com.wsl.demo.service.ModuleService;
import com.wsl.demo.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Demo2Application.class)
public class Demo2ApplicationTests {
	@Autowired
	private UserService userService;
	@Autowired
	private ModuleService moduleService;
	@Autowired
	private OperationMapper operationMapper;
	@Autowired
	private EnterpriseService enterpriseService;
	@Test
	public void contextLoads() {
	}

	@Test
	public void testService(){
		User user = userService.getEntity("1001");
		System.out.println(user.getUsername());
	}

	@Test
	public void testList(){
		List<Module> modules =  moduleService.getList();
		List<Operation> operations = operationMapper.selectByModuleId(modules.get(5).getModuleid());
	}

	@Test
	public void testEn(){
		Enterprise enterprise = enterpriseService.getEntity(1001);
	}

}
