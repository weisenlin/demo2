package com.wsl.demo.controller;

import com.wsl.demo.model.User;
import com.wsl.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/18 0018.
 */
@Controller
@RequestMapping("/login")
public class IndexController {
    @Autowired
    private UserService userService;

    @RequestMapping("shiro/test")
    public String login() {
        User user = new User();
        user.setLoginaccount("test");
        user.setPlatentid(1);
        user.setLoginaccount("a12345");
        Map<String, Object> map = new HashMap<>();
        map.put("loginaccount", "test");
        map.put("platentid", "1");
        map.put("loginpwd", "a12345");
        user = userService.login(map);
        return "/shiro/login";
    }

    @RequestMapping("shiro/index")
    public String index() {

        return "/shiro/index";
    }
}
