
//加载需要的nodejs模块
var http = require('http'),//服务器创建
	dns = require('dns'),  //DNS查询
	fs = require('fs'),    //文件操作
	url = require('url'),  //url处理
	querystring = require('querystring'); //字符串处理
	
//显示html页面
//http.createServer(function(req,res){
//	//设置Content-Type
//	res.writeHead(200,{'Content-Type' : 'text/html'});
//	//获取页面路径
//	var readPath =  './'+url.parse('index.html').pathname;
//	//读取html页面数据
//	var indexPage = fs.readFileSync(readPath);
//	res.end(indexPage);
//}).listen(3000,'127.0.0.1');

//路由处理
http.createServer(function(req,res){
	var pathname = url.parse(req.url()).pathname;
	req.setEncoding('utf8');//设置返回客户端页面的数据格式
	//设置Content-Type
	res.writeHead(200,{'Content-Type' : 'text/html'});
	router(req,res,pathname);//处理不同URL资源分发处理,调用router方法来处理url路由
}).listen(3000,'127.0.0.1');

function router(req,res,pathname){
	switch (pathname){
		case '/parse';
			parseDns(req,res)
		break;
		default;
		    goIndex(req,res)
	}
}
function goIndex(req,res){
	var readPath =  './'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}
function parseDns(req,res){
	var postData = '';
	req.addEventListener('data',function(postDataChunk){
		postData + =postDataChunk;
	})
	req.addEventListener('end',function(){
		var retData
	})
}
