<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>模块信息</title>
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="/js/lib/jquery-easyui-1.5.4.5/demo/demo.css">
    <script type="text/javascript" src="/js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-easyui-1.5.4.5/jquery.edatagrid.js"></script>
    <style type="text/css">
        form{
            margin:0;
            padding:0;
        }
        .dv-table td{
            border:0;
        }
        .dv-table input{
            border:1px solid #ccc;
        }
    </style>
    <script type="text/javascript" src="http://www.w3cschool.cc/try/jeasyui/datagrid-detailview.js"></script>
    <form method="post">
    <table class="dv-table" style="width:100%;background:#fafafa;padding:5px;margin-top:5px;">
        <tr>
            <td>模块名称</td>
            <td><input name="modulename" class="easyui-validatebox" required="true" value="${module.modulename!}"></input></td>
            <td>模块描述</td>
            <td><input name="moduledesc" class="easyui-validatebox" required="true" value="${module.moduledesc!}"></input></td>
        </tr>
        <tr>
            <td>访问地址</td>
            <td><input name="url" value="${module.url!}"></input></td>
        </tr>
    </table>
    <div style="padding:5px 0;text-align:right;padding-right:30px">
        <a href="#" class="easyui-linkbutton" iconCls="icon-save" plain="true" onclick="">Save</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" plain="true" onclick="">Cancel</a>
    </div>
</form>
</body>
</html>