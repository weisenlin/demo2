
/**
* @author : bighappy 
*           阻止无效字符输入
*           设置字符格式 format(#####.###00)  最小三位小数,不够三位后面不零  最大五位小数,超过则进行四舍五入
*/

	NumValidate = {};
	
	
	NumValidate.formatEvent = function(oEvent){
	     // alert(oEvent.charCode);
		if(!oEvent.charCode){
			//alert(oEvent.type);
			oEvent.charCode = (oEvent.type == "keypress") ? oEvent.keyCode : 0;
			//alert(oEvent.charCode  + "----");
			oEvent.eventPhase = 2;
			oEvent.isChar = (oEvent.charCode > 0);
			oEvent.pageX = oEvent.clientX + document.body.scrollLeft;
			oEvent.pageY = oEvent.clientY + document.body.scrollTop;
			oEvent.preventDefault = function(){
				this.returnValue = false;
			};
			
			if(oEvent.type == "mouseout"){
				oEvent.relatedTarget = oEvent.toElement;
			} else if (oEvent.type == "mouseover") {
				oEvent.relatedTarget = oEvent.frmElement;
			}
			
			oEvent.stopPropagation = function() {
				this.cancelBubble = true;
			};
			
			oEvent.target = oEvent.srcElement;
			oEvent.time = (new Date()).getTime();		
		}
		return oEvent;
	};

	/**
	*check the keychar is illeged
	*/
	NumValidate.allowChars = function(oEvent, inputElement, validStr){
		oEvent = NumValidate.formatEvent(oEvent);
		var hasStr = inputElement.value;
		var userChar = String.fromCharCode(oEvent.charCode);
		//alert(oEvent.charCode);
		//alert(userChar);
		//alert(oEvent);
		//negative flag 
		//if ueser press - key 
		//we set the input Element value '-' + oldValue.replace("-",""); 
		if(validStr.indexOf("-") != -1 && userChar == "-"){//negative flag 
			return true;
			var pos = cursorPosition.get(inputElement);//获得光标位置
			if(!hasStr)//the value is null
				inputElement.value = "-";
			else{
				if(hasStr.indexOf("-") != -1 || pos.start != 0)
					return oEvent.ctrlKey;
				else 
					return true;
			}
		}else if( validStr.indexOf(".") != -1 && userChar == "."){
			if(hasStr.indexOf(".") > -1)//小数点已经存在
				return false; 
			else{
				var pos = cursorPosition.get(inputElement);//获得光标位置
				if(pos.start == 0)//开始位置不允许有小数点
					return oEvent.ctrlKey;
				else if(pos.start == 1 && hasStr.indexOf(".") != -1){
					return oEvent.ctrlKey;
				}else{
					return true;
				}				
			}
		}else if(hasStr.indexOf("-") != -1){
			var pos = cursorPosition.get(inputElement);//获得光标位置
			if(pos.start == 0)
				return oEvent.ctrlKey;
		}
		//alert(validStr);
		var isValidChar = validStr.indexOf(userChar) > -1;
		return isValidChar || oEvent.ctrlKey || oEvent.charCode == 0;
	};
	
	/**
	*check the input is Illegle
	* format #####.###00
	*/
	NumValidate.checkInput = function(inputElement, format, null2zero, validStr){
		var hasStr = inputElement.value;
		
		if((hasStr && hasStr != "")){
				var temp = new Number(hasStr);
				//alert(temp.toString());
				if(temp.toString() == "NaN"){
					if(null2zero){
						inputElement.value = 0;
						hasStr = "0";
					}else{
						inputElement.value = "";
						return false;
					}					
				}
		}
		
		if((!hasStr || hasStr == "")&& !null2zero)
			return false;
			
		if((!hasStr || hasStr == "")&& null2zero)
			hasStr = "0";
		inputElement.value = NumValidate.modifyPrecision(hasStr, format);	
		return true;	
	};
	
	NumValidate.modifyPrecision = function(value, format){
	    var minPrecision = NumValidate.getMinPrecision(format);
	    var maxPrecision = NumValidate.getMaxPrecision(format);
	   // alert("min --- " + minPrecision + "--max--" + maxPrecision);
		var docIndex = value.indexOf(".");
		if(docIndex == -1 || docIndex == (value.length - 1)){//without the precision
			if(minPrecision > 0){
				value += ".";
			}
			
			for(var i = 1; i <= minPrecision; i++)
				value += "0";
			return value;
		}else{
			var strAfter = value .slice(docIndex + 1);
			//alert(strAfter);
			if(strAfter.length > maxPrecision){
				return new Number(value).toFixed(maxPrecision);
			}else if(strAfter.length <= maxPrecision && strAfter.length >= minPrecision){
				return value;
			}else if(strAfter.length < minPrecision ){
				for(var i = 1; i <= minPrecision - strAfter.length; i++)
					value += "0";
					
				return value;
			}
		}		
	};
	
	/**
	*get the minprecision accroding the format
	*/
	NumValidate.getMinPrecision = function(format){
		var docIndex = format.indexOf(".");
		if(docIndex == -1){
			return 0;		
		}else{
		 var strAfter = format.slice(docIndex + 1);
		 var zeroIndex = strAfter.indexOf("0");
		 if(zeroIndex == -1)
		 	 return 0;//strAfter.length;
		 else{
		 	return zeroIndex;
		 }
		}
	};
	
	
	/**
	*get the minprecision accroding the format
	*/
	NumValidate.getMaxPrecision = function(format){
		var docIndex = format.indexOf(".");
		if(docIndex == -1){
			return 0;	
		}else{
		 var strAfter = format.slice(docIndex + 1);
		 return  strAfter.length;
		 }
	};
	
	/********************** 获得光标位置   ***********/
	var cursorPosition = {
	get: function (textarea) {
		var rangeData = {text: "", start: 0, end: 0 };
	
		if (textarea.setSelectionRange) { // W3C	
			textarea.focus();
			rangeData.start= textarea.selectionStart;
			rangeData.end = textarea.selectionEnd;
			rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end): "";
		} else if (document.selection) { // IE			
			  var rngSel = document.selection.createRange();//建立选择域
			  var rngTxt = textarea.createTextRange();//建立文本域
			  var flag = rngSel.getBookmark();//用选择域建立书签
			  rngTxt.collapse();//瓦解文本域到开始位,以便使标志位移动
			  rngTxt.moveToBookmark(flag);//使文本域移动到书签位
			  rngTxt.moveStart('character',-textarea.value.length);//获得文本域左侧文本
			  str = rngTxt.text.replace(/\r\n/g,'');//替换回车换行符
			  rangeData.start= str.length;
			  rangeData.end = str.length;
		}
		
		return rangeData;
	}
}
	