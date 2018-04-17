package com.wsl.demo.mapper;

import com.github.pagehelper.Page;
import com.wsl.demo.model.User;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(String userid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> selectAllUser();

    Page<User> findByPage();
}