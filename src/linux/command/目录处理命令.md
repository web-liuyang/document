# 目录处理命令
## cd

命令名称：**cd**

命令英文原意：**change directory**

命令所在路径：**shell 内置命令**

功能描述：切换目录

语法：**cd [目录]**

```shell
cd /userinfo
```

## pwd

命令名称：**pwd**

命令英文原意：**print working directory**

命令所在路径：**/bin/pwd**

功能描述：显示当前所在的目录路径

语法：**pwd**

```shell
pwd
```

## ls

命令名称：**ls**

命令英文原意：**list**

命令所在路径：**/bin/ls**

功能描述：显示目录文件

语法：**ls 选项[-ald] [文件或目录]**

```shell
ls -ald /userinfo
```

常用参数描述：

| 选项/全称     | 描述                       |
| ------------- | -------------------------- |
| -a/-all       | 显示所有文件，包括隐藏文件 |
| -l/-long      | 详细信息显示               |
| -d/-directory | 查看目录属性               |
| -h/-human     | 显示能看懂的数据           |

## mkdir

命令名称：**mkdir**

命令英文原意：**make directories**

命令所在路径：**/bin/mkdir**

功能描述：创建新目录

语法：**mkdir 选项[-p] [目录名]**

```shell
mkdir -p /userinfo
```

常用参数描述：

| 选项/全称 | 描述         |
| --------- | ------------ |
| -p        | 递归创建目录 |

## rmdir

命令名称：**rmdir**

命令英文原意：**remove empty directories**

命令所在路径：**/bin/rmdir**

功能描述：删除空目录

语法：**rmdir [目录名]**

```shell
rmdir /userinfo
```

## cp

命令名称：**cp**

命令英文原意：**copy**

命令所在路径：**/bin/cp**

功能描述：复制文件或目录

语法：**cp 选项[-rp] [原文件或目录] [目标目录]**

```shell
cp -rp /userinfo /users
```

常用参数描述：

| 选项/全称 | 描述         |
| --------- | ------------ |
| -r        | 复制目录     |
| -p        | 保留文件属性 |

## mv

命令名称：**mv**

命令英文原意：**move**

命令所在路径：**/bin/mv**

功能描述：移动文件、改名

语法：**mv [原文件或目录] [目标目录]**

```shell
mv /userinfo /users
```

## rm

命令名称：**rm**

命令英文原意：**remove**

命令所在路径：**/bin/rm**

功能描述：删除文件

语法：**rm 选项[-rf] [目标目录]**

```shell
rm -rf /userinfo
```

常用参数描述：

| 选项/全称 | 描述     |
| --------- | -------- |
| -r        | 删除目录 |
| -f/force  | 强制执行 |