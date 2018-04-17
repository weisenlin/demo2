package com.wsl.demo.controller;

import com.github.pagehelper.Page;
import com.wsl.demo.model.Result;
import com.wsl.demo.model.User;
import com.wsl.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/17 0017.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @RequestMapping("/list.do")
    @ResponseBody
    public List<User> list(){
        Result result = new Result();
//        List<User> users = userService.getAll();
//        User users = userService.findByPage(1,5);
        Page<User> pages = userService.findByPage(1,20);
        return pages.getResult();
    }

    @RequestMapping("/ftl.do")
    public String testFtl(ModelMap mv){
        mv.addAttribute("user",userService.getEntity("1"));
        return "index";
    }

    @RequestMapping("/test/user")
    public String testUser(){
        return "user/list";
    }

    @RequestMapping("/edit/{id}")
    public User getUser(@PathVariable(value = "id") String id){
        User user = userService.getEntity(id);
        return user;
    }
}
