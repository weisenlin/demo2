package com.wsl.demo.mapper;

import com.wsl.demo.model.Module;

public interface ModuleMapper {
    int deleteByPrimaryKey(String moduleid);

    int insert(Module record);

    int insertSelective(Module record);

    Module selectByPrimaryKey(String moduleid);

    int updateByPrimaryKeySelective(Module record);

    int updateByPrimaryKey(Module record);
}