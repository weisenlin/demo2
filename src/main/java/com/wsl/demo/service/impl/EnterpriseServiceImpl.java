package com.wsl.demo.service.impl;

import com.wsl.demo.mapper.EnterpriseMapper;
import com.wsl.demo.model.Enterprise;
import com.wsl.demo.service.EnterpriseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 2018/4/18.
 */
@Service
@Transactional
public class EnterpriseServiceImpl implements EnterpriseService{

    @Autowired
    private EnterpriseMapper enterpriseMapper;
    @Override
    public Enterprise getEntity(Integer id) {
        return enterpriseMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Enterprise> getList() {
        return enterpriseMapper.selectAll();
    }
}
