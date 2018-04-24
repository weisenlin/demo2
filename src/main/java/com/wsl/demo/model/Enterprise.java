package com.wsl.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

public class Enterprise {
    private Integer platEntID;

    private String platEntType;

    private String platEntName;

    private String sccCode;

    private String orgCode;

    private String tradeCode;

    private String platEntNameE;

    private String customsCode;

    private String mftecCode;

    private String NGTCCode;

    private String districtCode;

    private String AEOType;

    private String coOwner;

    private String legalPerson;

    private String legalPersonPhone;

    private String legalPersonFax;

    private String chargeMan;

    private String chargeManPhone;

    private String chargeManFax;

    private String bank;

    private String bankAccount;

    private String address;

    private String addressE;

    private String ownerCode;

    private String ownerCodeScc;

    private String ownerCodeOrg;

    private String ownerName;

    private String tradeCo;

    private String tradeCoScc;

    private String tradeCoOrg;

    private String tradeName;

    private String agentCode;

    private String agentCodeScc;

    private String agentCodeOrg;

    private String agentName;

    private String notes;

    private String emstr_flag;

    private String ems_flag;

    private String emsdcr_flag;

    private String dec_flag;

    private String transapply_flag;

    private String transbill_flag;
    @JsonIgnore
    private byte[] signBmp;

    private List<User> users;

    public Integer getPlatEntID() {
        return platEntID;
    }

    public void setPlatEntID(Integer platEntID) {
        this.platEntID = platEntID;
    }

    public String getPlatEntType() {
        return platEntType;
    }

    public void setPlatEntType(String platEntType) {
        this.platEntType = platEntType == null ? null : platEntType.trim();
    }

    public String getPlatEntName() {
        return platEntName;
    }

    public void setPlatEntName(String platEntName) {
        this.platEntName = platEntName == null ? null : platEntName.trim();
    }

    public String getSccCode() {
        return sccCode;
    }

    public void setSccCode(String sccCode) {
        this.sccCode = sccCode == null ? null : sccCode.trim();
    }

    public String getOrgCode() {
        return orgCode;
    }

    public void setOrgCode(String orgCode) {
        this.orgCode = orgCode == null ? null : orgCode.trim();
    }

    public String getTradeCode() {
        return tradeCode;
    }

    public void setTradeCode(String tradeCode) {
        this.tradeCode = tradeCode == null ? null : tradeCode.trim();
    }

    public String getPlatEntNameE() {
        return platEntNameE;
    }

    public void setPlatEntNameE(String platEntNameE) {
        this.platEntNameE = platEntNameE == null ? null : platEntNameE.trim();
    }

    public String getCustomsCode() {
        return customsCode;
    }

    public void setCustomsCode(String customsCode) {
        this.customsCode = customsCode == null ? null : customsCode.trim();
    }

    public String getMftecCode() {
        return mftecCode;
    }

    public void setMftecCode(String mftecCode) {
        this.mftecCode = mftecCode == null ? null : mftecCode.trim();
    }

    public String getNGTCCode() {
        return NGTCCode;
    }

    public void setNGTCCode(String NGTCCode) {
        this.NGTCCode = NGTCCode == null ? null : NGTCCode.trim();
    }

    public String getDistrictCode() {
        return districtCode;
    }

    public void setDistrictCode(String districtCode) {
        this.districtCode = districtCode == null ? null : districtCode.trim();
    }

    public String getAEOType() {
        return AEOType;
    }

    public void setAEOType(String AEOType) {
        this.AEOType = AEOType == null ? null : AEOType.trim();
    }

    public String getCoOwner() {
        return coOwner;
    }

    public void setCoOwner(String coOwner) {
        this.coOwner = coOwner == null ? null : coOwner.trim();
    }

    public String getLegalPerson() {
        return legalPerson;
    }

    public void setLegalPerson(String legalPerson) {
        this.legalPerson = legalPerson == null ? null : legalPerson.trim();
    }

    public String getLegalPersonPhone() {
        return legalPersonPhone;
    }

    public void setLegalPersonPhone(String legalPersonPhone) {
        this.legalPersonPhone = legalPersonPhone == null ? null : legalPersonPhone.trim();
    }

    public String getLegalPersonFax() {
        return legalPersonFax;
    }

    public void setLegalPersonFax(String legalPersonFax) {
        this.legalPersonFax = legalPersonFax == null ? null : legalPersonFax.trim();
    }

    public String getChargeMan() {
        return chargeMan;
    }

    public void setChargeMan(String chargeMan) {
        this.chargeMan = chargeMan == null ? null : chargeMan.trim();
    }

    public String getChargeManPhone() {
        return chargeManPhone;
    }

    public void setChargeManPhone(String chargeManPhone) {
        this.chargeManPhone = chargeManPhone == null ? null : chargeManPhone.trim();
    }

    public String getChargeManFax() {
        return chargeManFax;
    }

    public void setChargeManFax(String chargeManFax) {
        this.chargeManFax = chargeManFax == null ? null : chargeManFax.trim();
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank == null ? null : bank.trim();
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount == null ? null : bankAccount.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getAddressE() {
        return addressE;
    }

    public void setAddressE(String addressE) {
        this.addressE = addressE == null ? null : addressE.trim();
    }

    public String getOwnerCode() {
        return ownerCode;
    }

    public void setOwnerCode(String ownerCode) {
        this.ownerCode = ownerCode == null ? null : ownerCode.trim();
    }

    public String getOwnerCodeScc() {
        return ownerCodeScc;
    }

    public void setOwnerCodeScc(String ownerCodeScc) {
        this.ownerCodeScc = ownerCodeScc == null ? null : ownerCodeScc.trim();
    }

    public String getOwnerCodeOrg() {
        return ownerCodeOrg;
    }

    public void setOwnerCodeOrg(String ownerCodeOrg) {
        this.ownerCodeOrg = ownerCodeOrg == null ? null : ownerCodeOrg.trim();
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName == null ? null : ownerName.trim();
    }

    public String getTradeCo() {
        return tradeCo;
    }

    public void setTradeCo(String tradeCo) {
        this.tradeCo = tradeCo == null ? null : tradeCo.trim();
    }

    public String getTradeCoScc() {
        return tradeCoScc;
    }

    public void setTradeCoScc(String tradeCoScc) {
        this.tradeCoScc = tradeCoScc == null ? null : tradeCoScc.trim();
    }

    public String getTradeCoOrg() {
        return tradeCoOrg;
    }

    public void setTradeCoOrg(String tradeCoOrg) {
        this.tradeCoOrg = tradeCoOrg == null ? null : tradeCoOrg.trim();
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName == null ? null : tradeName.trim();
    }

    public String getAgentCode() {
        return agentCode;
    }

    public void setAgentCode(String agentCode) {
        this.agentCode = agentCode == null ? null : agentCode.trim();
    }

    public String getAgentCodeScc() {
        return agentCodeScc;
    }

    public void setAgentCodeScc(String agentCodeScc) {
        this.agentCodeScc = agentCodeScc == null ? null : agentCodeScc.trim();
    }

    public String getAgentCodeOrg() {
        return agentCodeOrg;
    }

    public void setAgentCodeOrg(String agentCodeOrg) {
        this.agentCodeOrg = agentCodeOrg == null ? null : agentCodeOrg.trim();
    }

    public String getAgentName() {
        return agentName;
    }

    public void setAgentName(String agentName) {
        this.agentName = agentName == null ? null : agentName.trim();
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes == null ? null : notes.trim();
    }

    public String getEmstr_flag() {
        return emstr_flag;
    }

    public void setEmstr_flag(String emstr_flag) {
        this.emstr_flag = emstr_flag == null ? null : emstr_flag.trim();
    }

    public String getEms_flag() {
        return ems_flag;
    }

    public void setEms_flag(String ems_flag) {
        this.ems_flag = ems_flag == null ? null : ems_flag.trim();
    }

    public String getEmsdcr_flag() {
        return emsdcr_flag;
    }

    public void setEmsdcr_flag(String emsdcr_flag) {
        this.emsdcr_flag = emsdcr_flag == null ? null : emsdcr_flag.trim();
    }

    public String getDec_flag() {
        return dec_flag;
    }

    public void setDec_flag(String dec_flag) {
        this.dec_flag = dec_flag == null ? null : dec_flag.trim();
    }

    public String getTransapply_flag() {
        return transapply_flag;
    }

    public void setTransapply_flag(String transapply_flag) {
        this.transapply_flag = transapply_flag == null ? null : transapply_flag.trim();
    }

    public String getTransbill_flag() {
        return transbill_flag;
    }

    public void setTransbill_flag(String transbill_flag) {
        this.transbill_flag = transbill_flag == null ? null : transbill_flag.trim();
    }

    public byte[] getSignBmp() {
        return signBmp;
    }

    public void setSignBmp(byte[] signBmp) {
        this.signBmp = signBmp;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}