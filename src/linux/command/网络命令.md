# 网络命令
## write

命令名称：**write**

命令英文原意：**write**

命令所在路径：**/usr/bin/write**

功能描述：给指定用户发送消息

语法：**write [用户名称]**

```shell
write liuyang
```

## wall

命令名称：**wall**

命令英文原意：**write all**

命令所在路径：**/usr/bin/write**

功能描述：发送广播信息

语法：**wall [消息]**

```shell
wall hello
```

## ping

命令名称：**ping**

命令英文原意：**ping**

命令所在路径：**/bin/ping**

功能描述：测试网络连通性

语法：**ping 选项[-c] [IP地址]**

```shell
ping -c 4 www.baidu.com
```

常用参数描述：

| 选项/全称 | 描述         |
| --------- | ------------ |
| -c        | 指定发送次数 |

## ifconfig

命令名称：**ifconfig**

命令英文原意：**interface configure**

命令所在路径：**/sbin/ifconfig**

功能描述：查看或设置网卡信息

语法：**ifconfig [网卡名称] [IP地址]**

```shell
ifconfig eth0 127.0.0.1
```

## mail

命令名称：**mail**

命令英文原意：**mail**

命令所在路径：**/bin/mail**

功能描述：查看或发送电子邮件

语法：**mail [用户名称]**

```shell
mail liuyang
```

## last

命令名称：**last**

命令英文原意：**last**

命令所在路径：**/usr/bin/last**

功能描述：查看用户上次登录的时间

语法：**last**

```shell
last
```

## lastlog

命令名称：**lastlog**

命令英文原意：**lastlog**

命令所在路径：**/usr/bin/lastlog**

功能描述：查看某特定用户上次登录的时间

语法：**lastlog 选项[-u] [用户ID]**

```shell
lastlog -u 502
```

## traceroute

命令名称：**traceroute**

命令英文原意：**traceroute**

命令所在路径：**/bin/traceroute**

功能描述：显示数据包到主机间的路径

语法：**traceroute [IP地址]**

```shell
lastlog -u 502
```

## netstat

命令名称：**netstat**

命令英文原意：**netstat**

命令所在路径：**/bin/netstat**

功能描述：显示网络状态

语法：**netstat 选项[-atulrn]**

```shell
netstat -tuln
```

常用参数描述：

| 选项/全称 | 描述                   |
| --------- | ---------------------- |
| -a/--all  | 显示所有连线中的Socket |
| -t        | 显示TCP                |
| -u        | 显示UDP                |
| -l        | 显示正在监听           |
| -r        | 路由信息               |
| -n        | 显示IP以及端口         |

## setup

命令名称：**setup**

命令英文原意：**setup**

命令所在路径：**/usr/bin/netstat**

功能描述：配置网络

语法：**setup**

```shell
setup
```

注意： 修改后使用 `service network restart` 重启网络

## mount

命令名称：**mount**

命令英文原意：**mount**

命令所在路径：**/bin/netstat**

功能描述：挂载命令

语法：**mount /dev/sr0 [挂载点目录] **

```shell
mount /dev/sr0 /mnt/cdrom/
```

## umount

命令名称：**umount**

命令英文原意：**umount**

命令所在路径：**/usr/bin/umount**

功能描述：卸载命令

语法：**umount /dev/sr0**

```shell
umount /dev/sr0
```

