<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>用户列表</title>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/demo/demo.css">
    <script type="text/javascript" src="/js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.edatagrid.js"></script>
</head>
<body>
<#--<h2>用户信息</h2>-->
<#--<p>用户信息</p>-->
<#--<div style="margin:20px 0;"></div>-->

<table id="dg" title="My Users" class="easyui-datagrid" style="width:550px;height:250px"
       url="/user/list.do"
       toolbar="#toolbar"
       rownumbers="true" fitColumns="true" singleSelect="true">
    <thead>
    <tr>
        <th field="userid" width="50">First Name</th>
        <th field="username" width="50">Last Name</th>
        <th field="loginaccount" width="50">Phone</th>
        <th field="stopflag" width="50">Email</th>
    </tr>
    </thead>
</table>
<div id="toolbar">
    <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="newUser()">New User</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="editUser()">Edit User</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="destroyUser()">Remove User</a>
</div>



<div id="dlg" class="easyui-dialog" style="width:400px;height:280px;padding:10px 20px"
     closed="true" buttons="#dlg-buttons">
    <div class="ftitle">User Information</div>
    <form id="fm" method="post">
        <div class="fitem">
            <label>First Name:</label>
            <input name="firstname" class="easyui-validatebox" required="true">
        </div>
        <div class="fitem">
            <label>Last Name:</label>
            <input name="lastname" class="easyui-validatebox" required="true">
        </div>
        <div class="fitem">
            <label>Phone:</label>
            <input name="phone">
        </div>
        <div class="fitem">
            <label>Email:</label>
            <input name="email" class="easyui-validatebox" validType="email">
        </div>
    </form>
</div>
<div id="dlg-buttons">
    <a href="#" class="easyui-linkbutton" iconCls="icon-ok" onclick="saveUser()">Save</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" onclick="javascript:$('#dlg').dialog('close')">Cancel</a>
</div>




<table id="dg_1" title="My Users" style="width:550px;height:250px"
       toolbar="#toolbar" idField="id"
       rownumbers="true" fitColumns="true" singleSelect="true">
    <thead>
    <tr>
        <th field="username" width="50" editor="{type:'validatebox',options:{required:true}}">First Name</th>
        <th field="loginaccount" width="50" editor="{type:'validatebox',options:{required:true}}">Last Name</th>
        <th field="loginpwd" width="50" editor="text">Phone</th>
        <th field="stopflag" width="50" editor="{type:'validatebox',options:{validType:'number'}}">Email</th>
    </tr>
    </thead>
</table>
<div id="toolbar">
    <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="javascript:$('#dg_1').edatagrid('addRow')">New</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="javascript:$('#de_1').edatagrid('destroyRow')">Destroy</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-save" plain="true" onclick="javascript:$('#de_1').edatagrid('saveRow')">Save</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-undo" plain="true" onclick="javascript:$('#de_1').edatagrid('cancelRow')">Cancel</a>
</div>

</body>
<script>
    function newUser(){
//        $('#dlg').dialog('open').dialog('setTitle','New User');
//        $('#fm').form('clear');
//        url = '';
        var row = $('#dg').datagrid('getSelected');
        console.log(row);
    }
    $(function(){
        $('#dg_1').edatagrid({
            url: '/user/list.do'
//        saveUrl: 'save_user.php',
//        updateUrl: 'update_user.php',
//        destroyUrl: 'destroy_user.php'
        });
    })
</script>
</html>