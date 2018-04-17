package com.wsl.demo.service.impl;

import com.wsl.demo.mapper.ModuleMapper;
import com.wsl.demo.model.Module;
import com.wsl.demo.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 2018/4/17.
 */
@Service
@Transactional
public class ModuleServiceImpl implements ModuleService {

    @Autowired
    private ModuleMapper moduleMapper;
    @Override
    public List<Module> getList() {
        return moduleMapper.selectAll();
    }
}
