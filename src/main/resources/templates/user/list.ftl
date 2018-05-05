<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>用户列表</title>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/default/easyui.css"/>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/icon.css"/>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/demo/demo.css"/>
    <script type="text/javascript" src="/js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.edatagrid.js"></script>
</head>
<body>
<table id="dg" class="easyui-datagrid"
       url="/user/list.do"
       toolbar="#tb"
       rownumbers="true" pagination="true" fitColumns="true">
    <thead>
    <tr>
        <th field="userid" width="50">用户id</th>
        <th field="username" width="50">用户名</th>
        <th field="loginaccount" width="50">登录账号</th>
        <th field="loginpwd" width="50">登录密码</th>
    </tr>
    </thead>
</table>
<div id="tb" style="padding:3px">
    <span>用戶名:</span>
    <input id="itemid" style="line-height:26px;border:1px solid #ccc">
    <a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="doSearchUser()">查找</a>
</div>
</body>
<script>

</script>
</html>