# yum

命令名称：**yum**

命令英文原意：**yum**

命令所在路径：**/usr/bin/yum**

功能描述：自动下载 RPM 包并且安装

语法：**yum 选项[-y] [命令] [包名]**

```shell
yum -y install gcc
```

常用参数描述：

| 选项/全称    | 描述                             |
| ------------ | -------------------------------- |
| -y           | 自动YES确认                      |
| -v           | 操作过程                         |
| **命令**     |                                  |
| list         | 列出软件包                       |
| install      | 安装包                           |
| reinstall    | 覆盖软件包                       |
| update       | 更新软件包                       |
| search       | 在软件包详细信息中搜索指定字符串 |
| remove       | 移除软件包                       |
| grouplist    | 列出软件组列表                   |
| groupinstall | 安装软件组包                     |
| groupremove  | 移除软件组包                     |
