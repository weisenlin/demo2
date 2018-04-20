/*--------------------------------------------------|

| dTree 2.05 | www.destroydrop.com/javascript/tree/ |

|---------------------------------------------------|

| Copyright (c) 2002-2003 Geir Landr?              |

|                                                   |

| This script can be used freely as long as all     |

| copyright messages are intact.                    |

|                                                   |

| Updated: 17.04.2003                               |

|--------------------------------------------------*/

/*

tree node html code

												//added by bighappy
<div id="md1" class="dTreeNode">                                                                id = "m" + js对象名称 + node index
<a href="javascript: d.o(1);">
	<img id="jd1" src="treeimg/minusbottom.gif" alt="" />                  			id = "j" + js对象名称 + node index
</a>												//added by bighappy
	<input id="cd1" type="checkbox"/>							id = "c" + js对象名称 + node index
	<img id="id1" src="treeimg/folderopen.gif" alt="" />                   			id = "i" + js对象名称 + node index
<a id="sd1" class="node" href="javascript: d.setValue('310000','上海市');" 
	onclick="javascript: d.s(1);" ondblClick="javascript:submitSelected();">上海市</a>	id =  "s" + js对象名称 + node index
</div>
<div id="dd1" class="clip" style="display:block;">                                              children container div
                                                                                                id =  "d" + js对象名称 + node index
</div>

*/
//考虑到该树最终将被被改进到可以动态的增加结点和删除节点,那么采用 * +　JS对象别名　+ NODE INDEX 作为HTML元素的ID值是有非常脆弱的
//所以系统将把ID的值改为　＊　＋　JS对象名称　＋　NODE.ID的方式

// Node object

function Node(id, pid, name, url, ic, title, target, icon, iconOpen, open) {

	this.id = id; //nod id

	this.pid = pid; // parent item id

	this.name = name; // item name

	this.url = url;  // ??

	this.title = title;  //html title value

	this.target = target; // onclick open target?

	this.icon = icon;     // item close image icon

	this.iconOpen = iconOpen; // item open image icon

	this._io = open? true : false; // 该节点是否处于展开状态

	this._is = false;         // 该节点是否被选中

	this._ls = false;         //  是否为同根同级别的最后一个节点

	this._hc = false;         //  是否有子节点

	this._ai = 0;             //  index

	this._p;                  //  父节点
	//added by bighappy 
	this._ic = ic == null ? false : ic;        //该节点是否被选中, 在多选的时候启用
	
	this._rcf = false;  //是否为rootNode的第一个树节点

}



// Tree object
//objName   -------- treeObj js alias
//
function dTree(objName,imgDirPath) {
	
	this.idp = (imgDirPath == null || imgDirPath == "")? "." : imgDirPath;
	
	this.objStr = "" + objName;

	this.config = {

		target					: null, //a tag herf 打开目标

		folderLinks			: true, //非叶子节点是否允许有点击动作

		useSelection		: true,   //是否可选择的

		useCookies			: false,   //是否启用cookies来保留选中状态

		useLines				: true,    //同根节点是否使用直线连接

		useIcons				: true,    //节点是否采用图片 + 文字的方式显示 否则只用文字显示

		useStatusText		: false,                   //是否现实状态信息

		closeSameLevel	: false,                           //是否展开关闭同级的其他节点

		inOrder					: false

	}

	this.icon = { //默认的图片路径

		root				: this.idp + '/treeimg/base.gif',

		folder			: this.idp + '/treeimg/folder.gif',

		folderOpen	: this.idp + '/treeimg/folderopen.gif',

		node				: this.idp + '/treeimg/page.gif',

		empty				: this.idp + '/treeimg/empty.gif',

		line				: this.idp + '/treeimg/line.gif',

		join				: this.idp + '/treeimg/join.gif',

		joinBottom	: this.idp + '/treeimg/joinbottom.gif',

		plus				: this.idp + '/treeimg/plus.gif',

		plusBottom	: this.idp + '/treeimg/plusbottom.gif',
		
		plusTop		: this.idp + '/treeimg/plustop.gif',

		minus				: this.idp + '/treeimg/minus.gif',

		minusBottom	: this.idp + '/treeimg/minusbottom.gif',
		
		minusTop	: this.idp + '/treeimg/minustop.gif',

		nlPlus			: this.idp + '/treeimg/nolines_plus.gif',

		nlMinus			: this.idp + '/treeimg/nolines_minus.gif',
		
		checkAll    : this.idp + '/treeimg/checkAll.gif',
		
		uncheckAll    : this.idp + '/treeimg/uncheckAll.gif'

	};

	this.obj = objName;

	this.aNodes = [];   //结点集合

	this.aIndent = [];

	this.root = new Node(-1);  //根结点

	this.selectedNode = null;  //当前结点,原来记录的是某个节点对象的下标,现在记录该节点ID
	
	this.currrentItem = null; //当前节点 this.currentItem.id = this.selectedNode

	this.selectedFound = false;

	this.completed = false;
	//added by bighappy
	this.multiSel  = false; //是否多选,多选情况下的树将带有CHECKBOX
	
	this.itemClickMethod = null; //结点点击用户事件,树将在调用该函数时传递两个参数 node.id, node.name
	
	this.isRootDif = true;//根节点是否采用跟图片标记

}



// Adds a new node to the node array

dTree.prototype.add = function(id, pid, name, url, title, target, icon, iconOpen, open) {
	this.aNodes[this.aNodes.length] = new Node(id, pid, name, url, title, target, icon, iconOpen, open);

};



// Open/close all nodes

dTree.prototype.openAll = function() {

	this.oAll(true);

};

dTree.prototype.closeAll = function() {

	this.oAll(false);

};


// Outputs the tree to the page

dTree.prototype.toString = function() {

	var str = '<div class="dtree">\n';

	if (document.getElementById) {

		if (this.config.useCookies) this.selectedNode = this.getSelected();

		str += this.addNode(this.root);

	} else str += 'Browser not supported.';

	str += '</div>';

	if (!this.selectedFound) this.selectedNode = null;
	this.completed = true;
	return str;

};



// Creates the tree structure

dTree.prototype.addNode = function(pNode) {
	var str = '';

	var n=0;

	if (this.config.inOrder) n = pNode._ai;

	for (n; n<this.aNodes.length; n++) {
		if (this.aNodes[n].pid == pNode.id) {
			
			var cn = this.aNodes[n];
			
			if(pNode == this.root){
				if(this.config.inOrder){
					if(n == pNode._ai) cn._rcf = true;	
				} else{
					if(n == 0) cn._rcf = true;
				}	
			}

			cn._p = pNode;

			cn._ai = n;

			this.setCS(cn);

			if (!cn.target && this.config.target) cn.target = this.config.target;

			if (cn._hc && !cn._io && this.config.useCookies) cn._io = this.isOpen(cn.id);

			if (!this.config.folderLinks && cn._hc) cn.url = null;

			if (this.config.useSelection && cn.id == this.selectedNode && !this.selectedFound) {

					cn._is = true;

					this.selectedNode = n;

					this.selectedFound = true;

			}

			
			str += this.node(cn, cn.id);
		}

	}

	return str;

};



// Creates the node icon, url and text

dTree.prototype.node = function(node, nodeId) {

	var str = '<div id="m' + this.obj + nodeId + '" class="dTreeNode">' + this.indent(node, nodeId);

	if (this.config.useIcons) {

		if (!node.icon) node.icon = ((node._hc) ? this.icon.folder : this.icon.node);

		if (!node.iconOpen) node.iconOpen = (node._hc) ? this.icon.folderOpen : this.icon.node;
		//对根节点的图片是否区别对待
		if (this.root.id == node.pid && this.isRootDif) {

			node.icon = this.icon.root;

			node.iconOpen = this.icon.root;

	}
	//是否处于多选模式
	if(this.multiSel){
		
			str += '<img id="c' + this.obj + nodeId + '" onclick="javaScript:' +  this.obj + '.itemCheck(this)" ';
			if(node._ic) 
				str += ' src="' + this.icon.checkAll + '"/>'; //选中
			else
				str += ' src="' + this.icon.uncheckAll + '"/>';//未选中
		}
		
		str += '<img id="i' + this.obj + nodeId + '" src="' + ((node._io) ? node.iconOpen : node.icon) + '" alt="" />';

	}

	if (node.url) {

		str += '<a id="s' + this.obj + nodeId + '" class="' + ((this.config.useSelection) ? ((node._is ? 'nodeSel' : 'node')) : 'node') + '" href="####" ';

		if (node.title) str += ' title="' + node.title + '"';

		if (node.target) str += ' target="' + node.target + '"';

		if (this.config.useStatusText) str += ' onmouseover="window.status=\'' + node.name + '\';return true;" onmouseout="window.status=\'\';return true;" ';

		if (this.config.useSelection && ((node._hc && this.config.folderLinks) || !node._hc))

			str += ' onclick="javascript: ' + this.obj + '.s(\'' + nodeId + '\');' + this.obj + '.itemClick();"';
			str += ' ondblClick="javascript:submitSelected();"';

		str += '>';

	}else if ((!this.config.folderLinks || !node.url) && node._hc && node.pid != this.root.id)

		str += '<a href="javascript: ' + this.obj + '.o(\'' + nodeId + '\');" class="node">';

	str += node.name;

	if (node.url || ((!this.config.folderLinks || !node.url) && node._hc)) str += '</a>';

	str += '</div> \n';

	if (node._hc) {

		str += '<div id="d' + this.obj + nodeId + '" class="clip" style="display:' + ((node._io) ? 'block' : 'none') + ';">';

		str += this.addNode(node);

		str += '</div>';

	}
	this.aIndent.pop();


	return str;

};



// Adds the empty and line icons

dTree.prototype.indent = function(node, nodeId) {

	var str = '';

		for (var n=0; n<this.aIndent.length; n++)

			str += '<img src="' + ( (this.aIndent[n] == 1 && this.config.useLines) ? this.icon.line : this.icon.empty ) + '" alt="" />';

		(node._ls) ? this.aIndent.push(0) : this.aIndent.push(1);

		if (node._hc) {

			str += '<a href="javascript: ' + this.obj + '.o(\'' + nodeId + '\');"><img id="j' + this.obj + nodeId + '" src="';

			if (!this.config.useLines) str += (node._io) ? this.icon.nlMinus : this.icon.nlPlus;

			else str += ( (node._io) ? ((node._ls && this.config.useLines) ? this.icon.minusBottom : ( (node._rcf)? this.icon.minusTop : this.icon.minus)) : ((node._ls && this.config.useLines) ? this.icon.plusBottom : (node._rcf? this.icon.plusTop : this.icon.plus) ) );

			str += '" alt="" /></a>';

		} else str += '<img src="' + ( (this.config.useLines) ? ((node._ls) ? this.icon.joinBottom : this.icon.join ) : this.icon.empty) + '" alt="" />';


	return str;

};



// Checks if a node has any children and if it is the last sibling

dTree.prototype.setCS = function(node) {

	var lastId;

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.id) node._hc = true;   // node._hc 该结点是否有子节点
	
		if (this.aNodes[n].pid == node.pid) lastId = this.aNodes[n].id;
		
		
	}

	if (lastId==node.id) node._ls = true;                         // 该结点是同根同级节点的最后一个结点 ,显示时的连接线采用特殊图片

};



// Returns the selected node

dTree.prototype.getSelected = function() {

	var sn = this.getCookie('cs' + this.obj);

	return (sn) ? sn : null;

};



// Highlights the selected node
// parameter id = node.id
dTree.prototype.s = function(id) {

	if (!this.config.useSelection) return;

	var cn = this.findNodeById(id);

	if (cn._hc && !this.config.folderLinks) return;

	if (this.selectedNode != id) {

		if (this.selectedNode || this.selectedNode==0) {//NOT FINISHED

			eOld = document.getElementById("s" + this.obj + this.selectedNode);

			eOld.className = "node";

		}

		eNew = document.getElementById("s" + this.obj + id);

		eNew.className = "nodeSel";

		this.selectedNode = id;
		
		this.currentItem = cn;

		if (this.config.useCookies) this.setCookie('cs' + this.obj, cn.id);

	}

};



// Toggle Open or close
// parameter id = node.id    
dTree.prototype.o = function(id) {

	var cn = this.findNodeById(id);

	this.nodeStatus(!cn._io, id, cn._ls);

	cn._io = !cn._io;//cn._io  该节点是否处于展开状态

	if (this.config.closeSameLevel) this.closeLevel(cn);

	if (this.config.useCookies) this.updateCookie();

};



// Open or close all nodes

dTree.prototype.oAll = function(status) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n]._hc /*&& this.aNodes[n].pid != this.root.id*/) {

			this.nodeStatus(status, this.aNodes[n].id, this.aNodes[n]._ls)

			this.aNodes[n]._io = status;

		}

	}

	if (this.config.useCookies) this.updateCookie();

};



// Opens the tree to a specific node
// nodeId --- node id
// bSelect --- 是否同时选中该节电
dTree.prototype.openTo = function(nId, bSelect) {

	var node = this.findNodeById(nId);
	if(bSelect) this.s(nId);
	node = node._p;
	while(node && node.id != '-1'){
		this.nodeStatus(true, node.id, node._ls)
		node._io = true;
		node = node._p;
	}

};



// Closes all nodes on the same level as certain node

dTree.prototype.closeLevel = function(node) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.pid && this.aNodes[n].id != node.id && this.aNodes[n]._hc) {

			this.nodeStatus(false, this.aNodes[n].id, this.aNodes[n]._ls);

			this.aNodes[n]._io = false;

			this.closeAllChildren(this.aNodes[n]);

		}

	}

};



// Closes all children of a node

dTree.prototype.closeAllChildren = function(node) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.id && this.aNodes[n]._hc) {

			if (this.aNodes[n]._io) this.nodeStatus(false, this.aNodes[n].id, this.aNodes[n]._ls);

			this.aNodes[n]._io = false;

			this.closeAllChildren(this.aNodes[n]);		

		}

	}

};



// Change the status of a node(open or closed)

dTree.prototype.nodeStatus = function(status, id, bottom) {

	var cn = this.findNodeById(id);
	eDiv	= document.getElementById('d' + this.obj + id);

	eJoin	= document.getElementById('j' + this.obj + id);

	if (this.config.useIcons) {

		eIcon	= document.getElementById('i' + this.obj + id);

		eIcon.src = (status) ? cn.iconOpen : cn.icon;

	}

	eJoin.src = (this.config.useLines)?

	((status)?((bottom)?this.icon.minusBottom: (cn._rcf ? this.icon.minusTop : this.icon.minus)):((bottom)?this.icon.plusBottom:(cn._rcf ? this.icon.plusTop : this.icon.plus))):

	((status)?this.icon.nlMinus:this.icon.nlPlus);

	eDiv.style.display = (status) ? 'block': 'none';

};





// [Cookie] Clears a cookie

dTree.prototype.clearCookie = function() {

	var now = new Date();

	var yesterday = new Date(now.getTime() - 1000 * 60 * 60 * 24);

	this.setCookie('co'+this.obj, 'cookieValue', yesterday);

	this.setCookie('cs'+this.obj, 'cookieValue', yesterday);

};



// [Cookie] Sets value in a cookie

dTree.prototype.setCookie = function(cookieName, cookieValue, expires, path, domain, secure) {

	document.cookie =

		escape(cookieName) + '=' + escape(cookieValue)

		+ (expires ? '; expires=' + expires.toGMTString() : '')

		+ (path ? '; path=' + path : '')

		+ (domain ? '; domain=' + domain : '')

		+ (secure ? '; secure' : '');

};



// [Cookie] Gets a value from a cookie

dTree.prototype.getCookie = function(cookieName) {

	var cookieValue = '';

	var posName = document.cookie.indexOf(escape(cookieName) + '=');

	if (posName != -1) {

		var posValue = posName + (escape(cookieName) + '=').length;

		var endPos = document.cookie.indexOf(';', posValue);

		if (endPos != -1) cookieValue = unescape(document.cookie.substring(posValue, endPos));

		else cookieValue = unescape(document.cookie.substring(posValue));

	}

	return (cookieValue);

};



// [Cookie] Returns ids of open nodes as a string

dTree.prototype.updateCookie = function() {

	var str = '';

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n]._io && this.aNodes[n].pid != this.root.id) {

			if (str) str += '.';

			str += this.aNodes[n].id;

		}

	}

	this.setCookie('co' + this.obj, str);

};


//通过NODEID找到该节点对应的INDEX
dTree.prototype.findIndexByNodeId = function(id){
	for(var i = 0; i < this.aNodes.length; i++){
		if(this.aNodes[i].id == id)
			return i;
	}	
	
};

//通过nodeId选中或取消一个节点
dTree.prototype.chNodeById = function(id, isChecked){
	var cn = this.findNodeById(id);
	var chObj = document.getElementById("c" + this.obj + id);
	if(chObj) chObj.src = isChecked ? this.icon.checkAll : this.icon.uncheckAll;
	if(cn) cn._ic = isChecked; //改变节点选中状态
};
//查找一个树节点
dTree.prototype.findNodeById = function(id){
	for(var i = 0; i < this.aNodes.length; i++){
		if(this.aNodes[i].id == id)
			return this.aNodes[i];
	}
};

//选中或取消某一个节点点的所有子节点
dTree.prototype.chAllchildren = function(pid, isChecked){
	for(var i = 0; i < this.aNodes.length; i++){
		if(this.checkIsChild(pid,this.aNodes[i])){
			var chObj = document.getElementById("c" + this.obj + this.aNodes[i].id);
			if(chObj) chObj.src = isChecked ? this.icon.checkAll : this.icon.uncheckAll;
			this.aNodes[i]._ic = isChecked;
		}			
	}
};

//选中或取消某一个节点的所有父节点
dTree.prototype.checkAllPns = function(node, isChecked){
	while(node && node.id != '-1' && node._p && node._p.id != '-1'){
		var chObj = document.getElementById("c" + this.obj + node._p.id);
		if(chObj) chObj.src = isChecked ? this.icon.checkAll : this.icon.uncheckAll;
		node._p._ic = isChecked;
		node = node._p;
	}
};
	

//判断某结点是否为结点ID为pid的子结点
dTree.prototype.checkIsChild = function(pId,node){
	
	while(node && node.pid && node.pid != '-1'){
		if(node.pid == pId)
			return true;
		node = node._p;	
	}
	return false;
};							

// checkbox onClick事件,checkbox选中后要选中所有它的子节点,选中它的父结点
// 取消选中后,要取消它的所有子节点
dTree.prototype.itemCheck = function(etarget){
	if(etarget == null)
		return;
	
	var nodeId = etarget.id.substring(1 + this.objStr.length);
	var node = this.findNodeById(nodeId);
	var ic =  !node._ic;//(etarget.src.indexOf('uncheckAll.gif') >= 0) ? false : true;
	etarget.src = ic ? this.icon.checkAll : this.icon.uncheckAll;
	node._ic = ic;
	//清除或选中所有子节点
	//alert(nodeId);
	this.chAllchildren(nodeId, ic);
	//alert(ic);
	if(ic)//选中父节点
	   this.checkAllPns(node,ic);	
};

//获得该树的当前结点
dTree.prototype.getCurrentItem = function(){
	return this.currentItem;	
};
//获得该树的当前节点ID
dTree.prototype.getCurrentId = function(){
	return this.selectedNode;
};
//在多选状态下获得选中节点的ID
dTree.prototype.getSelectedIds = function(){
	var str = "";
	for(var i = 0; i < this.aNodes.length; i++){
		if(this.aNodes[i]._ic)
			str += this.aNodes[i].id + ";";	
	}
	return str;	
};
//结点点击事件
dTree.prototype.itemClick = function(){
	if(this.itemClickMethod != null){
		this.itemClickMethod(this.currentItem.id,this.currentItem.name,this.currentItem.url);
	}
};

//缺省选择
dTree.prototype.selectDefault = function(){
	 this.s(this.aNodes[0].id);
};

//判断给出id是否为叶子节点
dTree.prototype.isLeaf = function(pId){
	 for(var i = 0; i < this.aNodes.length; i++){
		if(this.checkIsChild(pId,this.aNodes[i])){
			return false;
		}			
	}
	return true;
};

// [Cookie] Checks if a node id is in a cookie

dTree.prototype.isOpen = function(id) {

	var aOpen = this.getCookie('co' + this.obj).split('.');

	for (var n=0; n<aOpen.length; n++)

		if (aOpen[n] == id) return true;

	return false;

};

//把该树显示在id为parentId的节点上
dTree.prototype.show = function(parentId){
	var parentObj = document.getElementById(parentId);
	parentObj.innerHTML = this.toString();
	//this.selectedNode = null;
	//alert(parentObj.innerHTML);
};


// If Push and pop is not implemented by the browser

if (!Array.prototype.push) {

	Array.prototype.push = function array_push() {

		for(var i=0;i<arguments.length;i++)

			this[this.length]=arguments[i];

		return this.length;

	}

};

if (!Array.prototype.pop) {

	Array.prototype.pop = function array_pop() {

		lastElement = this[this.length-1];

		this.length = Math.max(this.length-1,0);

		return lastElement;

	}

};