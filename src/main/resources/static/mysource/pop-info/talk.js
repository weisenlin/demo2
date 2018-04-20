var app = angular.module('talkApp', []);

app.controller('talkCtrl', function($scope) {
	//联系人集合
    $scope.linkerList = [{id:"1", name:'张三', position: '部门经理', company:'新盛通科技有限公司', image:'../images/user.jpg'},
    	{id:"2", name:'李四', position:'部门经理', company:'tti五金制品有限公司', image:'../images/user.jpg'},
    	{id:"3", name:'王二', position:'部门经理', company:'新盛通科技有限公司', image:'../images/user.jpg'}];
    //谈话集合
    $scope.talkerList = [{id:"1",name:'张三',position:'部门经理',company:'新盛通科技有限公司',lastTalk:'今晚有场好看的电影，要不要一起去看', unSee:12, image:'../images/user.jpg'},
    	{id:"2",name:'李四',position:'部门经理',company:'tti五金制品有限公司',lastTalk:'今晚有场好看的电影，要不要一起去看', unSee:10, image:'../images/user.jpg'},
    	{id:"3",name:'王二',position:'部门经理',company:'新盛通科技有限公司',lastTalk:'今晚有场好看的电影，要不要一起去看', unSee:8, image:'../images/user.jpg'}];
    //当前的交谈版面集合
    $scope.curList = [];
    //当前交谈
    $scope.curTalk = null;
    //是否显示交谈版面
    $scope.talkPlane = false;
    
    $scope.addLinker = function(){
    	$scope.linkerList.push({id:"1", name:'张三', position: '部门经理', company:'新盛通科技有限公司', image:'../images/user.jpg'});
    }
    
    //点击查看userInfo
    $scope.userInfo = {flag:false, image:'../images/user.jpg', name:''};
    
});