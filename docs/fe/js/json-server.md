# 简单使用

1. 安装全局工具  **json-server** （全局工具仅需要安装一次）【[官网](https://www.npmjs.com/package/json-server)】 

   > **npm install -g json-server 或 cnpm install -g json-server**

2. 代码根目录新建一个 db 目录 

3. 将资料 index.json 移入 db 目录 

4. 进入 db 目录，执行命令，启动后端接口服务

   > **json-server index.json**

推荐： json-server --watch index.json (可以实时监听 json 文件的修改)

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20230912154329.png)

# 具体过程：

> 在项目的初始阶段，后端提供的接口或数据可能是不完整的，作为一名前端开发工程师，不可避免的要使用mock的数据。如果此时的你不想使用简单的静态数据，而是想自己在本地启动一个server来模拟请求相关的操作，那么json-server是一个不错的选择。
> json-serve可以帮助我们快速搭建一个mock-server本地服务，可以根据不同的后缀获取到不同的数据。

###### 一、准备工作

###### 1、安装[Node](https://so.csdn.net/so/search?q=Node&spm=1001.2101.3001.7020)

由于json-server需要通过Node对其进行启动，所以首先要安装Node。Node可自行安装，在此不再进行演示。

###### 2、全局安装json-server

```bash
cnpm install json-server -g
```

###### 3、查看版本

在cmd控制台中输入以下命令，查看版本号。用于验证是否安装成功。

```bash
json-server -v
```

###### 4、准备一份JSON文件

我这里准备的是一份名字为score.json的文件，用于存放虚拟数据。

```json
{
  "scoreList":[
    {"id":1,"userName":"张三","age":12,"sex":"男","score":{"yuWen":10,"shuXue":20,"yingYu":30}},
    {"id":2,"userName":"李四","age":21,"sex":"女","score":{"yuWen":12,"shuXue":45,"yingYu":37}},
    {"id":3,"userName":"王五","age":56,"sex":"男","score":{"yuWen":12,"shuXue":20,"yingYu":30}},
    {"id":4,"userName":"赵六","age":23,"sex":"女","score":{"yuWen":19,"shuXue":21,"yingYu":65}},
    {"id":5,"userName":"严七","age":12,"sex":"男","score":{"yuWen":34,"shuXue":67,"yingYu":43}},
    {"id":6,"userName":"沈八","age":43,"sex":"女","score":{"yuWen":56,"shuXue":76,"yingYu":30}},
    {"id":7,"userName":"钱九","age":13,"sex":"男","score":{"yuWen":24,"shuXue":89,"yingYu":30}},
    {"id":8,"userName":"张十","age":12,"sex":"女","score":{"yuWen":10,"shuXue":54,"yingYu":31}}
  ]
}
```

###### 二、启动服务

###### 1、常用命令选项：

- – watch：通过该命令可以实时监测score.json的变化，如果省略该命令，即使score.json发生变化，刷新、或重新发送请求，仍然会返回初次启动服务时的数据。简写形式为：-w
- –port:指定服务的端口号，可省略，默认为3000。简写形式：-p
- –host:设置域，可省略。简写形式：-H

```
json-server --watch score.json --port 8090  --host 127.0.0.1
```

上方命令可简写为：

```
json-server score.json -w -p 8090 -H 127.0.0.1
```

但，一般通过下面命令，即可完基本工作：

```
json-server -w score.json
```

###### 2、工作场景建议

如果你已知项目接口域名及端口号，为避免后续更改接口信息。我们可以这样做：

- 假设项目接口域名为：`api.zhangpeiyue.com`,端口号为：`80`
- 设置host映射：用记事本打开`C:\Windows\System32\drivers\etc`目录中的`hosts`文件。底部增加：`127.0.0.1 api.zhangpeiyue.com`，该文件如果不允许修改，增加相对应的权限即可。

- 启动服务命令：

```
json-server --watch score.json --port 80  --host api.zhangpeiyue.com
```

由于80是默认端口号，所以我们可以通过`api.zhangpeiyue.com`来对数据进行操作了。

###### 3、通过`package.json`文件启动项目

启动json-server时， 如果自定义配置的参数过多，容易出现命令敲错的现象。我们可以在创建一个名字为`package.json`的文件，内容为：

```json
{
  "scripts": {
    "score": "json-server --watch score.json --port 80  --host api.zhangpeiyue.com"
  }
}
```

通过`npm run score`启动即可。

###### 4、自定义配置文件

json-server允许我们把所有的配置放到一个配置文件中，这个配置文件默认json-server.json。配置文件的主要内容如下：

```json
{
  "port": 80,  // 自定义服务监听端口
  "watch": true, // 服务监听
  "host": "api.zhangpeiyue.com",// 指定域
  "static": "./public", // 静态文件目录，可以将项目的HTML,JS,IMG等资源放在这里
  "read-only": false,  // 是否只允许get请求
  "no-cors":false, // 是否允许跨域访问
  "no-gzip": false, // 是否可压缩
  "routes": "route.json" // 自定义路由，这个配置可以暂时省略，后续会有所涉及
}
```

可以通过`json-server --watch score.json`启动项目。

4、输出类似以下内容，说明启动成功。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMjAxNTk3MC0wMmYxMDgwMDI1OTIxNjgzLnBuZw?x-oss-process=image/format,png)

###### 5、其它相关启动参数

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMjAxNTk3MC1lODk1MDc0ZjdlMTU2NWU1LnBuZw?x-oss-process=image/format,png)