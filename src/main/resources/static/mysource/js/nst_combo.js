/**
 * description: 该方法可自动初始化一个combo主键
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
        value = params.value;
    var mapperType = {
        LOAD_ALL: "loadAll",
        LOAD_PART: "loadPart"
    };
    var mapper = {
        CIQUnit: mapperType.LOAD_ALL,
        CIQComplex: mapperType.LOAD_PART,
        CIQAEOType: mapperType.LOAD_PART,
        CIQCustoms:mapperType.LOAD_PART,
        CIQDistrict:mapperType.LOAD_PART,
        CIQMftec:mapperType.LOAD_PART,
        CIQNgtc:mapperType.LOAD_PART,
        CIQType:mapperType.LOAD_PART,
        CIQWrapType:mapperType.LOAD_PART,
        CIQUseTo:mapperType.LOAD_PART,
        CIQTransf:mapperType.LOAD_PART,
        CIQTransac:mapperType.LOAD_PART,
        CIQStypeCode:mapperType.LOAD_PART,
        CIQTrade:mapperType.LOAD_PART,
        CIQPortLine:mapperType.LOAD_PART,
        CIQProductType:mapperType.LOAD_PART,
        CIQDockCode:mapperType.LOAD_PART,
        CIQEDocType:mapperType.LOAD_PART,
        CIQLevyType:mapperType.LOAD_PART,
        CIQLicenseDocu:mapperType.LOAD_PART,
        CIQManualProperty:mapperType.LOAD_PART,
        CIQPayMode:mapperType.LOAD_PART
    };
    var loadTypeMapper = {
        load: function (codeType, combo, success) {
            var mapperOfCodeType = mapper[codeType] || mapperType.LOAD_PART;
            switch (mapperOfCodeType) {
                case mapperType.LOAD_ALL:
                    combo.enableFilteringMode(true);
                    combo.load(ctx + "/code/load.do?codeType=" + codeType, function () {
                        typeof success === "function" && success();
                        combo.initValue();
                    });
                    combo.setFilterHandler(function (mask, option) {
                        mask = mask && mask.replace("(", "\\(");
                        mask = mask && mask.replace(")", "\\)");
                        return mask.length === 0 || option.text.match(new RegExp(mask, "i")) !== null || option.value.match(new RegExp("^" + mask, "i")) !== null;
                    });
                    break;
                case mapperType.LOAD_PART:
                	combo.enableFilteringMode(true, "dummy"); 
                	combo.attachEvent("onDynXLS", combo.cusFilter);         	 
                	combo.initValue();
                    //combo.enableFilteringMode("between", ctx + "/code/filter.do?codeType=" + codeType, true, true);
                    break;
            }
        }
    };

    var myCombo = new dhtmlXCombo(id);
    myCombo.enableAutocomplete();
    myCombo.allowFreeText(true);
    myCombo.oldText = "";
    myCombo.loading = 0;    //加载是否已完成  0--已完成
    myCombo.svalue = value; //初始值
    myCombo.isInit = false; //是否已经完成初始化
    myCombo.doBlur = false; //只有加载完成后才会做doBlur事件，动态数据库加载有意义
    myCombo.setComboText(value);
    name && myCombo.setName(name);
    myCombo.loadType = mapper[codeType] || mapperType.LOAD_PART;
    
    //handler, 针对loadAll
    if(myCombo.loadType == mapperType.LOAD_ALL){
        myCombo.handle = function (text) {
        	console.log(text + "------------" + this.oldText);
        	var that = this;
            if (that.oldText && that.oldText === text && !(this.isInit == false && this.svalue == text)) {
                return;
            }
            text = text && text.replace("(", "\\(");
            text = text && text.replace(")", "\\)");
            if (!text) return;
            var index = -1;
            for (var i = 0; i < that.getOptionsCount(); i++) {
                var op = that.getOptionByIndex(i);

                if (!op.text.match(new RegExp(text, "i"))) continue;
                index++;
                if (index > 0) break;
                var selectedI = i;
            }
            if (index === 0) {
                that.selectOption(selectedI);
            } else {
                // 可以匹配到多个，不设置
                that.unSelectOption();
            }
        };
    }else{//针对load_part
        myCombo.handle = function (text) {
        	console.log(text + "------------" + this.oldText);
        	var that = this;
            if (that.oldText && that.oldText === text && !(this.isInit == false && this.svalue == text)) {
                return;
            }
            text = text && text.replace("(", "\\(");
            text = text && text.replace(")", "\\)");
            if (!text) return;
            var index = -1;
            for (var i = 0; i < that.getOptionsCount(); i++) {
                var op = that.getOptionByIndex(i);

                if (!op.text.match(new RegExp(text, "i"))) continue;
                index++;
                if (index > 0) break;
                var selectedI = i;
            }
            if (index === 0) {
                that.selectOption(selectedI);
            } else {
                // 可以匹配到多个，不设置
                that.unSelectOption();
            }
        };
        
        myCombo.cusFilter = function(text){ // where 'text' is the text typed by the user into Combo
            //this.clearAll();
            var cc = this;
            cc.loading ++;
            window.dhx.ajax.get(ctx + "/code/filter.do?codeType=" + codeType + "&mask=" + text, function(xml){
                cc.load(xml.xmlDoc.responseText);
                //when the text is '' , do not open it
                if(text!=''){
                    cc.openSelect();
                }
                cc.loading--;
                if(!cc.isInit && cc.loading == 0){
                	cc.handle(cc.getComboText());
                	cc.isInit = true;
                }
                
                if(cc.doBlur && cc.loading == 0){
                	cc.handle(cc.getComboText());
                	cc.doBlur = false;
                }               
            });
        };
    }
        
    myCombo.attachEvent("onFocus", function () {
        this.oldText = this.getComboText();
    });
    
    myCombo.attachEvent("onBlur", function () {
        var that = this;
        var text = that.getComboText();
        if(that.loading == 0){//如果已经加载完毕
        	that.handle(text);
	    }else{//未加载完毕,对动态数据库加载过滤有意义
	        that.doBlur = true;	
	    }
    });
    
    myCombo.initValue = function(){
    	if(!this.isInit){
    		if(this.loadType == mapperType.LOAD_ALL){
    			this.handle(this.getComboText());
        		this.isInit = true;
    		}else{
    			this.doBlur = true;
        		this.cusFilter(this.getComboText());
    		}
    		
    	}
    };
    
    myCombo.SetComboValue = function(v){
    	if(this.loadType == mapperType.LOAD_ALL)
    		this.handle(v);
    	else{
    		this.doBlur = true;
    		this.cusFilter(v);
    	}
    };
    
    myCombo.mapper = mapper;
    
    //myCombo.handle(value);
    loadTypeMapper.load(codeType, myCombo);
    
    return myCombo;
};