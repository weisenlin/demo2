package com.wsl.demo.service;

import com.wsl.demo.model.Module;

import java.util.List;

/**
 * Created by Administrator on 2018/4/17.
 */
public interface ModuleService {

    List<Module> getList();

    Module getEntity(String id);
}
