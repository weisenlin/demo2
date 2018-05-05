package com.wsl.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2018/5/5.
 */
@Controller
@RequestMapping("")
public class LayoutController {

    @RequestMapping("")
    public String index() {

        return "login";
    }

    @RequestMapping("/layout.do")
    public String layout() {

        return "index";
    }
}
