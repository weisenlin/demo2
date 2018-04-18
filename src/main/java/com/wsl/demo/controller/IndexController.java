package com.wsl.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/18 0018.
 */
@Controller
@RequestMapping("/login")
public class IndexController {

    @RequestMapping("shiro/test")
    public String login(){

        return "/shiro/login";
    }

    @RequestMapping("shiro/index")
    public String index(){

        return "/shiro/index";
    }
}
