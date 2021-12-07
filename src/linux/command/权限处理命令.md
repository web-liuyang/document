# 权限处理命令
## chmod

命令名称：**chmod**

命令英文原意：**change the permissions mode of a file**

命令所在路径：**/bin/chmod**

功能描述：改变文件或目录权限

语法：**chmod -R [{ugoa}{+-=}{rwx}] [文件或目录]**

语法：**chmod -R [mode=421] [文件或目录]**

```shell
chmod -R u+rwx userinfo
chmod -R 777 userinfo
```

常用参数描述：

| 选项/全称    | 描述     |
| ------------ | -------- |
| -R           | 递归修改 |
| u/user       | 用户     |
| g/group      | 用户组   |
| o/other      | 其他     |
| a/all        | 全部     |
| +            | 添加权限 |
| -            | 删除权限 |
| =            | 覆盖权限 |
| r/read/4     | 读权限   |
| w/write/2    | 写权限   |
| x/executor/1 | 执行权限 |

## chown

命令名称：**chown**

命令英文原意：**change file ownership**

命令所在路径：**/bin/chown**

功能描述：改变文件或目录的所有者

语法：**chown [用户] [文件或目录]**

```shell
chown liuyang userinfo
```

## chgrp

命令名称：**chgrp**

命令英文原意：**change file group ownership**

命令所在路径：**/bin/chgrp**

功能描述：改变文件或目录的所有者

语法：**chgrp [用户组] [文件或目录]**

```shell
chgrp staff userinfo
```

## umask

命令名称：**umask**

命令英文原意：**the user file-creation mask**

命令所在路径：**Shell 内置命令**

功能描述：显示、设置文件的缺省权限

语法：**umask [-S]**

```shell
umask -S
```

