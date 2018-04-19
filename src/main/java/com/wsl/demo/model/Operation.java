package com.wsl.demo.model;

public class Operation {
    private String oprid;

    private String moduleid;

    private String oprname;

    private String oprdesc;

    private String stopflag;

    private Integer displayseq;

    private String agentunitflag;

    private String ownerunitflag;

    private String platunitflag;

    private String flowflag;

    private Module module;

    public String getOprid() {
        return oprid;
    }

    public void setOprid(String oprid) {
        this.oprid = oprid == null ? null : oprid.trim();
    }

    public String getModuleid() {
        return moduleid;
    }

    public void setModuleid(String moduleid) {
        this.moduleid = moduleid == null ? null : moduleid.trim();
    }

    public String getOprname() {
        return oprname;
    }

    public void setOprname(String oprname) {
        this.oprname = oprname == null ? null : oprname.trim();
    }

    public String getOprdesc() {
        return oprdesc;
    }

    public void setOprdesc(String oprdesc) {
        this.oprdesc = oprdesc == null ? null : oprdesc.trim();
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

    public String getAgentunitflag() {
        return agentunitflag;
    }

    public void setAgentunitflag(String agentunitflag) {
        this.agentunitflag = agentunitflag == null ? null : agentunitflag.trim();
    }

    public String getOwnerunitflag() {
        return ownerunitflag;
    }

    public void setOwnerunitflag(String ownerunitflag) {
        this.ownerunitflag = ownerunitflag == null ? null : ownerunitflag.trim();
    }

    public String getPlatunitflag() {
        return platunitflag;
    }

    public void setPlatunitflag(String platunitflag) {
        this.platunitflag = platunitflag == null ? null : platunitflag.trim();
    }

    public String getFlowflag() {
        return flowflag;
    }

    public void setFlowflag(String flowflag) {
        this.flowflag = flowflag == null ? null : flowflag.trim();
    }

    public Module getModule() {
        return module;
    }

    public void setModule(Module module) {
        this.module = module;
    }
}