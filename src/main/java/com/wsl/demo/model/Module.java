package com.wsl.demo.model;

import java.util.List;

public class Module {
    private String moduleid;

    private Integer level;

    private String parentmoduleid;

    private String modulename;

    private String moduledesc;

    private String url;

    private String stopflag;

    private Integer displayseq;

    private List<Operation> operations;

    public String getModuleid() {
        return moduleid;
    }

    public void setModuleid(String moduleid) {
        this.moduleid = moduleid == null ? null : moduleid.trim();
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getParentmoduleid() {
        return parentmoduleid;
    }

    public void setParentmoduleid(String parentmoduleid) {
        this.parentmoduleid = parentmoduleid == null ? null : parentmoduleid.trim();
    }

    public String getModulename() {
        return modulename;
    }

    public void setModulename(String modulename) {
        this.modulename = modulename == null ? null : modulename.trim();
    }

    public String getModuledesc() {
        return moduledesc;
    }

    public void setModuledesc(String moduledesc) {
        this.moduledesc = moduledesc == null ? null : moduledesc.trim();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
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

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }
}