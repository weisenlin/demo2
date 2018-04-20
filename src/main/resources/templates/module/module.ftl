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
    <script type="text/javascript">
        $(function(){
            $('#dg').datagrid({
                view: detailview,
                detailFormatter:function(index,row){
                    return '<div class="ddv"></div>';
                },
                onExpandRow: function(index,row){
                    var ddv = $(this).datagrid('getRowDetail',index).find('div.ddv');
                    ddv.panel({
                        border:false,
                        cache:true,
                        href:'/module/get/'+row.moduleid,
                        onLoad:function(){
//                            $('#dg').datagrid('fixDetailRowHeight',index);
//                            $('#dg').datagrid('selectRow',index);
//                            $('#dg').datagrid('getRowDetail',index).find('form').form('load',row);
                        }
                    });
                    $('#dg').datagrid('fixDetailRowHeight',index);
                }
            });
        });
        function saveItem(index){
            var row = $('#dg').datagrid('getRows')[index];
            var url = row.isNewRecord ? 'save_user.php' : 'update_user.php?id='+row.id;
            $('#dg').datagrid('getRowDetail',index).find('form').form('submit',{
                url: url,
                onSubmit: function(){
                    return $(this).form('validate');
                },
                success: function(data){
                    data = eval('('+data+')');
                    data.isNewRecord = false;
                    $('#dg').datagrid('collapseRow',index);
                    $('#dg').datagrid('updateRow',{
                        index: index,
                        row: data
                    });
                }
            });
        }
        function cancelItem(index){
            var row = $('#dg').datagrid('getRows')[index];
            if (row.isNewRecord){
                $('#dg').datagrid('deleteRow',index);
            } else {
                $('#dg').datagrid('collapseRow',index);
            }
        }
        function destroyItem(){
            var row = $('#dg').datagrid('getSelected');
            if (row){
                $.messager.confirm('Confirm','Are you sure you want to remove this user?',function(r){
                    if (r){
                        var index = $('#dg').datagrid('getRowIndex',row);
                        $.post('destroy_user.php',{id:row.id},function(){
                            $('#dg').datagrid('deleteRow',index);
                        });
                    }
                });
            }
        }
        function newItem(){
            $('#dg').datagrid('appendRow',{isNewRecord:true});
            var index = $('#dg').datagrid('getRows').length - 1;
            $('#dg').datagrid('expandRow', index);
            $('#dg').datagrid('selectRow', index);
        }
    </script>
</head>
<body>
<h2>模块信息</h2>
<div class="demo-info" style="margin-bottom:10px">
    <div class="demo-tip icon-tip">&nbsp;</div>
    <div>查看模块</div>
</div>


<table id="dg" title="My Users" style="width:700px;height:250px"
       url="/module/load.do"
       toolbar="#toolbar" pagination="true"
       fitColumns="true" singleSelect="true">
    <thead>
    <tr>
        <th field="modulename" width="50">模块名称</th>
        <th field="moduledesc" width="50">描述</th>
        <th field="url" width="50">访问地址</th>
    </tr>
    </thead>
</table>
<div id="toolbar">
    <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="newItem()">New</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="destroyItem()">Destroy</a>
</div>
</body>
</html>