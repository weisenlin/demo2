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
<ul class="easyui-tree">
    <li>
        <span>全部模块</span>
    <#list modules as m>
        <#if m.level==1>
            <ul>
                <li>
                    <span>${m.modulename!}</span>
                    <#list modules as m1>
                        <#if m1.parentmoduleid?? && (m1.parentmoduleid == m.moduleid)>
                            <ul>
                                <li><span>${m1.modulename!}</span></li>
                            </ul>
                        </#if>
                    </#list>
                </li>
            </ul>
        </#if>
    </#list>
    </li>
</ul>

</body>
<script>

</script>
</html>