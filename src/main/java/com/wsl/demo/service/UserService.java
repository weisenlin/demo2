package com.wsl.demo.service;

import com.github.pagehelper.Page;
import com.wsl.demo.model.User;

import java.util.List;
import java.util.Map;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/17 0017.
 */
public interface UserService {

    User getEntity(String userId);

    List<User> getAll();

    /**
     * 分页查询
     * @param pageNo 页号
     * @param pageSize 每页显示记录数
     * @return
     */
    Page<User> findByPage(int pageNo, int pageSize);


    User login(Map<String,Object> user);
}
