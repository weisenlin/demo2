package com.wsl.demo.model;

import java.util.Date;

public class EnterpriseRegister {
    private Integer platEntregID;

    private String platEntType;

    private String platEntStatus;

    private String platEntName;

    private String tradeCode;

    private String sccCode;

    private String orgNo;

    private String linkMan;

    private String phoneNumber;

    private String email;

    private String notes;

    private Date registerDate;

    private String auditMan;

    private Date auditDate;

    private String auditNotes;

    public Integer getPlatEntregID() {
        return platEntregID;
    }

    public void setPlatEntregID(Integer platEntregID) {
        this.platEntregID = platEntregID;
    }

    public String getPlatEntType() {
        return platEntType;
    }

    public void setPlatEntType(String platEntType) {
        this.platEntType = platEntType == null ? null : platEntType.trim();
    }

    public String getPlatEntStatus() {
        return platEntStatus;
    }

    public void setPlatEntStatus(String platEntStatus) {
        this.platEntStatus = platEntStatus == null ? null : platEntStatus.trim();
    }

    public String getPlatEntName() {
        return platEntName;
    }

    public void setPlatEntName(String platEntName) {
        this.platEntName = platEntName == null ? null : platEntName.trim();
    }

    public String getTradeCode() {
        return tradeCode;
    }

    public void setTradeCode(String tradeCode) {
        this.tradeCode = tradeCode == null ? null : tradeCode.trim();
    }

    public String getSccCode() {
        return sccCode;
    }

    public void setSccCode(String sccCode) {
        this.sccCode = sccCode == null ? null : sccCode.trim();
    }

    public String getOrgNo() {
        return orgNo;
    }

    public void setOrgNo(String orgNo) {
        this.orgNo = orgNo == null ? null : orgNo.trim();
    }

    public String getLinkMan() {
        return linkMan;
    }

    public void setLinkMan(String linkMan) {
        this.linkMan = linkMan == null ? null : linkMan.trim();
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber == null ? null : phoneNumber.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes == null ? null : notes.trim();
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public String getAuditMan() {
        return auditMan;
    }

    public void setAuditMan(String auditMan) {
        this.auditMan = auditMan == null ? null : auditMan.trim();
    }

    public Date getAuditDate() {
        return auditDate;
    }

    public void setAuditDate(Date auditDate) {
        this.auditDate = auditDate;
    }

    public String getAuditNotes() {
        return auditNotes;
    }

    public void setAuditNotes(String auditNotes) {
        this.auditNotes = auditNotes == null ? null : auditNotes.trim();
    }
}