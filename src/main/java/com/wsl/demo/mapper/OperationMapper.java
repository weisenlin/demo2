package com.wsl.demo.mapper;

import com.wsl.demo.model.Operation;

public interface OperationMapper {
    int deleteByPrimaryKey(String oprid);

    int insert(Operation record);

    int insertSelective(Operation record);

    Operation selectByPrimaryKey(String oprid);

    int updateByPrimaryKeySelective(Operation record);

    int updateByPrimaryKey(Operation record);
}