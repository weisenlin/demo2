package com.wsl.demo.controller;

import com.wsl.demo.model.Enterprise;
import com.wsl.demo.service.EnterpriseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Administrator on 2018/4/19.
 */
@Controller
@RequestMapping("enterprise")
public class EnterpriseController {
    @Autowired
    private EnterpriseService enterpriseService;

    @RequestMapping("/index.do")
    public String index(){

        return "enterprise/index";
    }

    @RequestMapping("/list.do")
    @ResponseBody
    public List<Enterprise> loadData(){
        List<Enterprise> enterpriseList = enterpriseService.getList();

        return  enterpriseList;
    }
}
