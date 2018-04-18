package com.wsl.demo.controller;

import com.wsl.demo.model.Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/18 0018.
 */
@Controller
@RequestMapping("/errorAdvice")
public class ErrorController {


    @RequestMapping("test")
    public String toError(){
//        int i = 1/0;
        return "/error/error";
    }

    @RequestMapping("test/ajax")
    @ResponseBody
    public Result testAjax(){
//        int i = 1/0;
        return Result.OK;
    }
}
