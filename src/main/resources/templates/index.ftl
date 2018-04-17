<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Basic DataGrid - jQuery EasyUI Demo</title>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/demo/demo.css">
    <script type="text/javascript" src="/js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.easyui.min.js"></script>
</head>
<body>
<#--<h2>用户信息</h2>-->
<#--<p>用户信息</p>-->
<#--<div style="margin:20px 0;"></div>-->

<table class="easyui-datagrid" title="用户信息" style="width:700px;height:250px"
       data-options="singleSelect:true,collapsible:true,url:'/user/list.do',method:'get'">
    <thead>
    <tr>
        <th data-options="field:'userid',width:80">用户id</th>
        <th data-options="field:'username',width:100">用户名</th>
        <th data-options="field:'platentid',width:80,align:'right'">platentid</th>
        <th data-options="field:'loginaccount',width:80,align:'right'">登录账号</th>
        <th data-options="field:'loginpwd',width:250">loginpwd</th>
        <th data-options="field:'stopflag',width:60,align:'center'">stopflag</th>
    </tr>
    </thead>
</table>

</body>
</html>