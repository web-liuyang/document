# 压缩命令
## gzip

命令名称：**gzip**

命令英文原意：**GNU zip**

命令所在路径：**/usr/bin/gzip**

功能描述：压缩文件-压缩后格式为.gz

语法：**gzip 选项[-d] [文件]**

```shell
gzip userinfo
```

常用参数描述：

| 选项/全称 | 描述   |
| --------- | ------ |
| -d        | 解压缩 |

## gunzip

命令名称：**gunzip**

命令英文原意：**GNU zip**

命令所在路径：**/usr/bin/gzip**

功能描述：解压.gz的压缩文件

语法：**gunzip [文件]**

```shell
gunzip userinfo
```

## tar

命令名称：**tar**

命令英文原意：**tape archive**

命令所在路径：**/usr/bin/tar**

功能描述：用来建立/还原备份文件的工具程序，它可以加入/解开备份文件内的文件

语法：**tar 选项[-zxcvf] [新名称] [目录或文件名称]**

```shell
tar -zvcf userinfo.tar.zip userinfo
```

常用参数描述：

| 选项/全称    | 描述                      |
| ------------ | ------------------------- |
| -c/--create  | 建立新的备份文件          |
| -f           | 指定备份文件              |
| -j           | 通过bzip2指令处理备份文件 |
| -v/--verbose | 被备份的文件              |
| -x           | 从备份文件中还原文件      |
| -z/--gzip    | 通过gzip指令处理备份文件  |

## zip

命令名称：**zip**

命令英文原意：**zip**

命令所在路径：**/usr/bin/zip**

功能描述：压缩文件

语法：**zip [新名称] [目录或文件名称]**

```shell
zip userinfo.zip userinfo
```

## unzip

命令名称：**unzip**

命令英文原意：**unzip**

命令所在路径：**/usr/bin/unzip**

功能描述：解压文件

语法：**unzip [压缩文件]**

```shell
unzip userinfo.zip
```

## bzip2

命令名称：**bzip2**

命令英文原意：**bzip2**

命令所在路径：**/usr/bin/bzip2**

功能描述：压缩文件-bz2格式

语法：**bzip2 选项[-k] [文件]**

```shell
bzip2 -k userinfo
```

常用参数描述：

| 选项/全称 | 描述           |
| --------- | -------------- |
| -k        | 保留压缩的文件 |

## bunzip2

命令名称：**bunzip2**

命令英文原意：**bunzip2**

命令所在路径：**/usr/bin/bunzip2**

功能描述：解压文件

语法：**bunzip2 选项[-k] [压缩文件]**

```shell
bunzip2 -k userinfo.bz2
```

常用参数描述：

| 选项/全称 | 描述           |
| --------- | -------------- |
| -k        | 保留解压的文件 |
