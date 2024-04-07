
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

------

## 上传操作

1.找到想要上传的文件夹，进入并点击 git sh here

然后输入 `git init`

然后输入 `git remote add origin https://gitee.com/[码云的用户名]/[仓库路径].git`
这里建议直接复制

然后 `git add ./` ./表示当前文件夹内所有文件

然后 `git commit -m "上传的信息"`

然后 `git push origin master` 查看gitee上发现文件上传成功

上面是第一次创建远程仓库的情况

如果有新的文件，从`git add [文件名]` 处开始即可。

------

## git push error: failed to push some refs to 异常处理

### 一、异常错误

- 使用Github时，`git push`命令出现 `error: failed to push some refs to 'git@github.com:xxxxx'`错误

### 二、原因

- 远端仓库更新数据未同步到本地

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20231002092020.png)

### 三、解决方法

- 先将远程代码库中文件pull到本地，进行代码合并，使用`git pull --rebase origin master`

- 再push新的代码到Github代码库中，进行上传`git push -u origin master`

  

------

## ! [rejected] master -＞ master (non-fast-forward) 异常处理

non-fast-forward：译为‘不能快速前进’，远程仓库更新了，你没有及时同步到本地，提交的时候添加了新的内容，提交的时候，然后检测到远程和本地不一样。为了安全起见，报了这个错误。

可以先合并之前的历史，在进行提交

1. 先把git的东西fetch到本地，需要合并就就合并，然后再push

```bash
git fetch origin master
 
git merge origin FETCH_HEAD 
```

2.`git pull --rebase origin master`

------

## Incorrect username or password (access token)  异常处理

由于我更改了 git 账号密码，导致我在push的时候出现`Incorrect username or password (access token)`。

然后网上查解决方式，有通过[修改本地的 Windows 凭据](https://blog.csdn.net/qq_40428678/article/details/84074488) 所在的密码，但我发现了我的本地Windows凭据没有gitee。。。。

然后我发现了另一种解决方式，通过[git命令](https://so.csdn.net/so/search?q=git命令&spm=1001.2101.3001.7020)的方式解决 。

```bash
git config --system --unset credential.helper
```

先执行以上命令后，再重新执行push命令就会提示重新输入账号和密码，然后正确输入即可。