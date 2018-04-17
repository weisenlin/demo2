package com.wsl.demo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Result<T> implements Serializable {
    public static final int CODE_OK = 200;
    public static final int CODE_BAD_REQUEST = 400;
    public static final int CODE_NOT_FOUND = 404;
    public static final int CODE_UNAUTHORIZED = 401;
    public static final int CODE_SERVER_ERROR = 500;
    public static final int CODE_FORBIDDEN = 403;

    public static final Result OK = new Result(CODE_OK);
    public static final Result BAD_REQUEST = new Result(CODE_BAD_REQUEST, "Bad Request");
    public static final Result NOT_FOUND = new Result(CODE_NOT_FOUND, "Not Found");
    public static final Result UNAUTHORIZED = new Result(CODE_UNAUTHORIZED);
    public static final Result SERVER_ERROR = new Result(CODE_SERVER_ERROR, "Internal Server SMServerAPIError");
    public static final Result FORBIDDEN = new Result(CODE_FORBIDDEN, "Forbidden");

    private static final long serialVersionUID = 373566251015523287L;

    /**
     * 状态码，本类的状态码基本仿照HTTP状态码
     */
    private int code = 200;
    /**
     * 对应状态码的字符串信息，可自行定义
     */
    private String message = "OK";

    /**
     * 错误记录信息
     */
    private List<String> errList = new ArrayList<>();

    /**
     * 具体业务数据
     */
    private T data;

    public Result() {
    }

    public Result(int code) {
        this.code = code;
        this.message = isSuccess() ? "OK" : "FAIL";
    }

    public Result(int code, String message) {
        this.code = code;
        this.message = message;
    }

    /**
     * 获得错误信息
     * @return
     */
    public List<String> getErrList() {
        return errList;
    }

    /**
     * 设置错误信息
     * @param errList
     */
    public void setErrList(List<String> errList) {
        this.errList = errList;
    }

    /**
     * 添加错误信息
     * @param e
     */
    public void addErr(String e) {
        this.errList.add(e);
    }

    /**
     * 添加错误信息集合
     * @param elist
     */
    public void addErrList(List<String> elist) {
        this.errList.addAll(elist);
    }


    /**
     * 方便前端直接判断是否请求成功
     */
    public boolean isSuccess() {
        return code == 200;
    }

    public void setSuccess(boolean success) {

    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setResult(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

