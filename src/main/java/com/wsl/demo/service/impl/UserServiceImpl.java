package com.wsl.demo.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.wsl.demo.mapper.UserMapper;
import com.wsl.demo.model.User;
import com.wsl.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 名称:
 * 用途：
 * Created by SILVA_WSL on 2018/4/17 0017.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public User getEntity(String userId) {
        return userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public List<User> getAll() {
        return userMapper.selectAllUser();
    }

    @Override
    public Page<User> findByPage(int pageNo, int pageSize) {
        PageHelper.startPage(pageNo, pageSize);
        return userMapper.findByPage();
    }
}
