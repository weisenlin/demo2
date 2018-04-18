package com.wsl.demo.controller;

import com.wsl.demo.model.Result;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/18 0018.
 */
@ControllerAdvice
public class ErrorHandler {

    private static Logger logger = LogManager.getLogger(ErrorHandler.class.getName());

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Object getException(Exception e, HttpServletRequest request, HttpServletResponse response) throws Exception{
        if(isAjax(request)){
            Result result = new Result();
            result.setCode(401);
            result.setMessage(e.getMessage());
            return result;
        }else{
            ModelAndView mv = new ModelAndView();
            mv.addObject("exception", e);
            mv.addObject("url", request.getRequestURL());
            mv.setViewName("/error/error");
            return mv;
        }
    }



    private static boolean isAjax(HttpServletRequest request){
        String requestType = request.getHeader("X-Requested-With");
        if("XMLHttpRequest".equals(requestType)){
            return true;
        }else{
           return false;
        }
    }
}
