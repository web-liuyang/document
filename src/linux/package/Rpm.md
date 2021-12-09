# rpm

命令名称：**rpm**

命令英文原意：**rpm**

命令所在路径：**/usr/bin/rpm**

功能描述：安装二进制包

语法：**rpm 选项[-iuevh] [包全名或包名]**

```shell
rpm -ivh httpd...
```

常用参数描述：

| 选项/全称     | 描述                       |
| ------------- | -------------------------- |
| -i/--install  | 安装软件包                 |
| -U/ --upgrade | 升级软件包                 |
| -e,/--erase   | 清除 (卸载) 软件包         |
| -v/--verbose  | 提供更多的详细信息输出     |
| -h/ --hash    | 显示hash进度               |
| --nodeps      | 不验证包依赖               |
|               |                            |
| -q/--query    | 查询包                     |
| -l/--list     | 列出软件包中的文件         |
| -p            | 查询未安装的包             |
| -l/--list     | 列表                       |
| --info        | 查询软件信息               |
| -f            | 查询系统文件属于哪个软件包 |
| -R            | 查询软件包的依赖性         |