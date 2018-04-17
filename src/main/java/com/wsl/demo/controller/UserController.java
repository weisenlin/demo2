package com.wsl.demo.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.wsl.demo.model.Result;
import com.wsl.demo.model.User;
import com.wsl.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
    public Result list(){
        Result result = new Result();
//        List<User> users = userService.getAll();
//        User users = userService.findByPage(1,5);
        Page<User> pages = userService.findByPage(1,2);
        PageInfo users = new PageInfo(pages);
        result.setData(users);
        return result;
    }

    @RequestMapping("/ftl.do")
    public String testFtl(ModelMap mv){
        mv.addAttribute("user",userService.getEntity("1"));
        return "index";
    }
}
