package com.wsl.demo.service;

import com.wsl.demo.model.Enterprise;

import java.util.List;

/**
 * Created by Administrator on 2018/4/18.
 */
public interface EnterpriseService {

    Enterprise getEntity(Integer id);

    List<Enterprise> getList();
}
