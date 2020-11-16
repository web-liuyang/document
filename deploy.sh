#!/bin/bash

# 执行 sudo chmod +x ./deploy.sh 给权限

# 遇到错误不继续执行
set -e  


echo 'start'

git add .

git commit -m 'update'

git push gitee master

git push github master

echo 'end'