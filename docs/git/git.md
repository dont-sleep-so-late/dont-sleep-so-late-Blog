
## 账户配置

1. 配置全局账户，对所有 Git 仓库有效

```sh
git config --global user.name 'Your Name'
git config --global user.email 'Your Email'
```

2. 配置局部账户，只对当前 Git 仓库有效

```sh
git config --local user.name 'Your Name'
git config --local user.email 'Your Email'
```

3. 查看全局配置

```sh
git config --global --list
```

4. 查看局部配置

```sh
git config --local --list
```

## 生成ssh 密钥

连接到github仓库，公钥文件存放在C:/用户文件夹/.ssh/id_rsa.pub

```sh
ssh-keygen -t rsa -C "你的邮箱"
ssh -T git@github.com   //测试连接命令
```

## 本地基本操作

### 初始化本地库

```sh
git init
```

### 查看状态

```sh
git status
```

### 添加暂存区 git add

- 将当前目录及其子目录下所有变更添加到暂存区

```sh
git add .
```

- 将本地库所有变更添加到暂存区

```sh
git add -A
```

- 指定文件添加暂存区

```sh
git add file1 file2 ...
```

### 提交本地库 git commit

- 提交所有变更

```sh
git commit
# or
git commit -m '日志信息' -a
```

- 提交当前目录及其子目录的变更

```sh
git commit -m '日志信息' .
```

- 提交指定文件

```sh
git commit -m '日志信息' fileName
```

## 比较差异 git diff

1. 比较工作区和暂存区的所有差异，只能查看旧文件的变更（包括修改和删除），不能查看新文件（因为新文件还为被 git 追踪）

```sh
git diff
```

2. 比较指定文件工作区和暂存区的差异

```sh
git diff fileName
```

3. 比较暂存区和 HEAD 的所有差异

```sh
git diff --cached
```

4. 比较指定文件暂存区和 HEAD 的差异

```sh
git diff --cached fileName
```

5. 比较两个版本的差异

- 以前者为基准看后者的变化
- HEAD 表示最后一次 commit 对应的版本，HEAD~1 往前一个版本

```sh
git diff 版本号1 版本号2
```

```sh
git diff HEAD~1 HEAD
git diff HEAD~2 HEAD
```

6. 比较两个分支指定文件的差异

```sh
git diff 分支1 分支2 fileName
```

## 查看日志信息 git log

1. 查看简要日志信息

```sh
git reflog
```

2. 查看详细日志信息

```sh
git log
```

3. 查看极简日志信息

```sh
git log --oneline
```

4. 查看最近 n 次的版本信息

```sh
git log -n
```

5. 查看所有分支的版本历史

```sh
git log --all
```

6. 以图形形式展示版本历史

```sh
git log --graph
```

7. 查看涉及到指定文件的 commit 记录

```sh
git log fileName
```

8. 查看指定文件每一行修改对应的 commit 记录和作者

```sh
git blame fileName
```

## 分支命令

### 创建分支

- 基于当前分支创建分支

```sh
git branch 新分支
```

- 基于指定分支创建分支

```sh
git branch 新分支 已有分支
```

- 基于某个 commit 创建分支

```sh
git branch 新分支 commitID
```

- 基于当前分支创建分支并切换到新分支

```sh
git checkout -b 新分支
```

- 基于远程分支创建新分支

```sh
git checkout -b 新分支 别名/远程分支名
git checkout -b test_2023 origin/test_2023
```

### 查看本地分支

```sh
git branch -v
```

### 删除分支

- 安全删除本地分支

```sh
git branch -d 分支
```

- 强制删除本地分支

```sh
git branch -D 分支
```

### 切换分支

```sh
git checkout 分支名
```

## 合并分支

### 合并本地分支

`merge` 和 `rebase`的区别有待学习实践 :worried:

1. 将 A 分支合并到当前分支，且为 merge 创建 commit

```sh
git merge A
```

2. 将 A 分支合并到 B 分支，且为 merge 创建 commit

```sh
git merge A B
```

3. 把当前分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到当前分⽀

```sh
git rebase B
```

4. 把 A 分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到 A 分⽀

```sh
git rebase B A
```

### 合并远程仓库分支

1. 将远程指定分支与本地当前分支合并。可用于在合并到团队公共分支之前解决冲突问题，在本地合并公共分支先解决掉冲突。

```sh
git merge --no-ff origin/develop_2023-03-12
```

## 版本穿梭与回滚

1. 工作区指定文件恢复成和暂存区一样

```sh
git checkout file1 file2 ...

# tips in the Git sh
# use "git restore <file>..." to discard changes in working directory
git restore file1 file2 ...
```

2. 暂存区指定文件恢复成和 HEAD 一样

```sh
git reset file1 file2 ...

# tips in the Git sh
# use "git restore --staged <file>..." to unstage
git restore --staged file1 file2 ...
```

3. 工作区和暂存区所有文件恢复成和 HEAD 一样

```sh
git reset --hard
```

4. 工作区和暂存区所有文件恢复成和指定版本一样

```sh
git reset --hard 版本号
```

## 修改 commit 记录

1. 往最后一次 commit 追加记录，而不新建 commit - [reference](https://segmentfault.com/a/1190000038535534)

```sh
git commit --amend
```

2. 合并 commit 记录 - [reference](https://www.jianshu.com/p/4a8f4af4e803)

```sh
git rebase -i HEAD~2
```

## 远程仓库交互

### git remote

1. 查看所有远程仓库地址别名

```sh
git remote -v
```

2. 为远程仓库起别名

```sh
git remote add 别名 地址
```

3. 删除远程仓库别名

```sh
git remote remove 别名
```

4. 修改别名

```sh
git remote rename 旧名 新名
```

### git clone

1. 克隆远程仓库到本地

```sh
git clone 地址
```

2. 克隆远程仓库指定分支到本地

```sh
git clone -b 远程仓库分支名 地址
```

### git pull

1. 拉取远程分支，并与本地分支合并

```sh
git pull 别名 分支名
```

### git push

1. 推送本地指定分支到仓库指定分支

```sh
git push 别名 本地分支:远程分支
```

2. 如果远程分支被省略，表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建

```sh
git push origin master
```

3. 如果省略本地分支名，等同于推送一个空的本地分支到远程分支，表示删除指定的远程分支，等同于

```sh
git push origin :master
# 等同于
git push origin --delete master
```

4. 强制推送

```sh
git push --force origin master
```

5. 直接使用仓库地址推送，无需起别名

```sh
git push git@github.com:<USERNAME>/<REPO>.git master:main
```
