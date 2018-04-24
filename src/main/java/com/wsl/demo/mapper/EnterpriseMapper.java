package com.wsl.demo.mapper;

import com.wsl.demo.model.Enterprise;

import java.util.List;


public interface EnterpriseMapper {
    int deleteByPrimaryKey(Integer platEntID);

    int insert(Enterprise record);

    int insertSelective(Enterprise record);

    Enterprise selectByPrimaryKey(Integer platEntID);

    int updateByPrimaryKeySelective(Enterprise record);

    int updateByPrimaryKeyWithBLOBs(Enterprise record);

    int updateByPrimaryKey(Enterprise record);

    List<Enterprise> selectAll();
}