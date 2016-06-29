模块分为 ：

原生模块----nodejs API提供的原生模块，启动时已被加载
           require加载相应的模块，加载成功会返回一个模块对象，该对象拥有这个模块的所有属性和方法
           var  http = require('http');
           http.createServer(function(resquest,response){}).listen(8080,'127.0.0.1')
           
           
文件模块----动态加载模块，由原生模块  module 来实现和完成加载工作，通过require方法实现加载
           var test =  require('./path/test.js')相对路径或者绝对路径，后缀名.js可以省略
           test（外部对象）对象只能调用和访问test.js文件模块中的exports和module.exports对象暴露给该模块外部对象的属性和方法
           
           
两种模块都会进行缓存，第二次require该模块的时候，不会重复开销去加载模块，只需要从缓存中读取相应模块数据