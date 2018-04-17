package com.wsl.demo.controller;

import com.wsl.demo.model.Module;
import com.wsl.demo.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 2018/4/17.
 */
@Controller
@RequestMapping("module")
public class ModuleController {
    @Autowired
    private ModuleService moduleService;


    @RequestMapping("index")
    public String index(ModelMap mv){
        List<Module> modules = moduleService.getList();
        mv.addAttribute("modules",modules);
        mv.addAttribute("user","bbb");
        return "/module/module";
    }
}
