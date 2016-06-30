
var http = require('http'),//服务器创建
	url = require('url'); //url处理
	
var	router = require('./router.js')//加载路由器文件模块

//创建http服务器
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf8');//设置返回客户端页面的数据格式
	//设置Content-Type
	res.writeHead(200,{'Content-Type' : 'text/html'});
	router.router(req,res,pathname);//处理不同URL资源分发处理,调用router方法来处理url路由
}).listen(3000,'127.0.0.1');