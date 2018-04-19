package com.wsl.demo.model;

public class User {
    private String userid;

    private String username;

    private Integer platentid;

    private String loginaccount;

    private String loginpwd;

    private String agentpersonid;

    private String adminflag;

    private String stopflag;

    private Integer displayseq;

    private Enterprise enterprise;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public Integer getPlatentid() {
        return platentid;
    }

    public void setPlatentid(Integer platentid) {
        this.platentid = platentid;
    }

    public String getLoginaccount() {
        return loginaccount;
    }

    public void setLoginaccount(String loginaccount) {
        this.loginaccount = loginaccount == null ? null : loginaccount.trim();
    }

    public String getLoginpwd() {
        return loginpwd;
    }

    public void setLoginpwd(String loginpwd) {
        this.loginpwd = loginpwd == null ? null : loginpwd.trim();
    }

    public String getAgentpersonid() {
        return agentpersonid;
    }

    public void setAgentpersonid(String agentpersonid) {
        this.agentpersonid = agentpersonid == null ? null : agentpersonid.trim();
    }

    public String getAdminflag() {
        return adminflag;
    }

    public void setAdminflag(String adminflag) {
        this.adminflag = adminflag == null ? null : adminflag.trim();
    }

    public String getStopflag() {
        return stopflag;
    }

    public void setStopflag(String stopflag) {
        this.stopflag = stopflag == null ? null : stopflag.trim();
    }

    public Integer getDisplayseq() {
        return displayseq;
    }

    public void setDisplayseq(Integer displayseq) {
        this.displayseq = displayseq;
    }

    public Enterprise getEnterprise() {
        return enterprise;
    }

    public void setEnterprise(Enterprise enterprise) {
        this.enterprise = enterprise;
    }
}