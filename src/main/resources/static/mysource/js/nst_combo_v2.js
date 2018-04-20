/**
 * description: 该方法可自动初始化一个combo组件
 *
 * eg: nstCombo({id: "combo_td2", codeType: "CIQUnit"});
 * id为标签id（必须）
 * codeType为com.fc.bgpt.code.model包下的简单类名（必须）
 *
 * @author baolin
 * @date 2017-10-31 16:06
 **/
var nstCombo = function (params) {
    var id = params.id,
        codeType = params.codeType,
        name = params.name,
        value = params.value,
        label = params.label;
        

    var myCombo = new dhtmlXCombo(id);
    myCombo.enableAutocomplete();
    myCombo.allowFreeText(true);
    myCombo.oldText = "";
    myCombo.isLoaded = false;
    myCombo.codeType = codeType;
    myCombo.loadSuccess = {};//加载成功后操作,预留
    myCombo.value = value;
    myCombo.label = label;
    name && myCombo.setName(name);
    myCombo.loadData = function () {
        this.enableFilteringMode(true);
        this.load(ctx + "/code/load.do?codeType=" + this.codeType, function () {
            //typeof success === "function" && success();
        });
        this.setFilterHandler(function (mask, option) {
        mask = mask && mask.replace("(", "\\(");
        mask = mask && mask.replace(")", "\\)");
        return mask.length === 0 || option.text.match(new RegExp(mask, "i")) !== null || option.value.match(new RegExp("^" + mask, "i")) !== null;
        });
        this.isLoaded = true;
   };
    
    myCombo.handle = function (text) {
        	console.log(text + "------------" + this.oldText);
        	var that = this;
            if (that.oldText && that.oldText == text) {
                return;
            }
            text = text && text.replace("(", "\\(");
            text = text && text.replace(")", "\\)");
            if (!text) return;
            var index = -1;
            for (var i = 0; i < that.getOptionsCount(); i++) {
                var op = that.getOptionByIndex(i);

                if (op.text.match(new RegExp(text, "i")) !== null || op.value.match(new RegExp("^" + text, "i")) !== null){
                	index = i;
                	break;
                }
            }
            
            if (index == -1) {
            	alert("无法找到指定的编码");
            	 that.unSelectOption();                
                that.setFocus();
            } else{
            	that.selectOption(index);
            }
        };
        
    myCombo.attachEvent("onFocus", function () {
        this.oldText = this.getComboText();
        if(!this.isLoaded)
			this.loadData();
    });
    
    myCombo.attachEvent("onBlur", function () {
        var that = this;
        var text = that.getComboText();
        that.handle(text);
    });
    
    myCombo.initValue = function(){
    	if(this.value == "")
    		return;
    	this.addOption([
    	    [this.value,this.label]
    	]);
    	this.selectOption(0);
    };
    
    myCombo.SetComboValue = function(v){
    		this.handle(v);
    };
    
    myCombo.initValue();
    
    return myCombo;
};