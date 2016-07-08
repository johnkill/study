模块分为 ：

原生模块----nodejs API提供的原生模块，启动时已被加载
           require加载相应的模块，加载成功会返回一个模块对象，该对象拥有这个模块的所有属性和方法
           var  http = require('http');
           http.createServer(function(resquest,response){}).listen(8080,'127.0.0.1')
           
           
文件模块----动态加载模块，由原生模块  module 来实现和完成加载工作，通过require方法实现加载
           var test =  require('./path/test.js')相对路径或者绝对路径，后缀名.js可以省略
           test（外部对象）对象只能调用和访问test.js文件模块中的exports和module.exports对象暴露给该模块外部对象的属性和方法
           
           
两种模块都会进行缓存，第二次require该模块的时候，不会重复开销去加载模块，只需要从缓存中读取相应模块数据


forever模块（https://github.com/foreverjs/forever）

nodejs作为HTTP服务器，需要确保项目正常运行，需要注意两点：
-----后台服务运行，监控运行日志，以及HTTP请求日志
-----确保项目的正常安全运行
同时其拥有监控文件更改，自动重启等功能

两种使用方法：
-----命令行中使用
-----require forever模块使用


socket.io模块（https://github.com/LearnBoost/socket.io    http://socket.io/）

作用：将WebSocket协议应用到所有的浏览器，主要用于实时的长连接多请求项目中，例如：在线联网游戏，实时聊天，实时股票查看，二维码扫描登录等



request模块

为开发者提供了一种简单访问http请求的方法，支持HTTPS的访问方法-----涵盖的请求方式GET POST HEAD DEL等
GET-----用于信息获取，向服务器索取数据的一种请求，请求的数据会附在url后面（就是把协议放在url请求头里面），提交的数据最多1024字节
http://test.holdfun.cn/portal/api/common/versioncheck?dev=gaoxueling&_=1467871857029&callback=commonApiVersionHandler
POST----安全性比GET高，向服务器提交数据的一种请求


Formidable模块------解决文件的上传




nodejs设计模式

模块与类

模块---为完成某一功能所需的一段程序或子程序，简单意义上的一个对象，该对象拥有多个方法和属性，类似一个“类”，但不是
             拥有私有成员和公有成员exports和module.exports的成员为公有成员，其他则为私有成员
             
nodejs的继承

util模块