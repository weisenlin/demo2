package com.wsl.demo.mapper;

import com.github.pagehelper.Page;
import com.wsl.demo.model.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    int deleteByPrimaryKey(String userid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> selectAllUser();

    Page<User> findByPage();

    User login(Map<String,Object> user);
}