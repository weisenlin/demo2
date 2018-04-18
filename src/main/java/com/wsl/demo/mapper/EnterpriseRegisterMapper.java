package com.wsl.demo.mapper;

import com.wsl.demo.model.EnterpriseRegister;

public interface EnterpriseRegisterMapper {
    int deleteByPrimaryKey(Integer platEntregID);

    int insert(EnterpriseRegister record);

    int insertSelective(EnterpriseRegister record);

    EnterpriseRegister selectByPrimaryKey(Integer platEntregID);

    int updateByPrimaryKeySelective(EnterpriseRegister record);

    int updateByPrimaryKey(EnterpriseRegister record);
}