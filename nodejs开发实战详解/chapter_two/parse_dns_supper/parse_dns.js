//dns解析大致分为四个模块：
//入口模块  ----负责服务器创建
//路由处理模块 -----负责url转发以及请求资源分配  index.js
//DNS解析模块 ----DNS解析的业务逻辑
//首页展示模块------负责读取index.html页面并返回客户端
//加载需要的nodejs模块
var dns = require('dns'),  //DNS查询
	querystring = require('querystring'); //字符串处理

exports.parseDns = function(req,res){
	var postData = '';
	//数据传递到服务器时触发的事件函数，读取客户端传来的数据，获取数据后添加到postData
	req.addListener('data',function(postDataChunk){
		postData += postDataChunk;
	})
	//数据接收完成，触发end事件
	req.addListener('end',function(){
		var retData = getDns(postData,function(domain,addresses){
			res.writeHead(200,{'Content-Type' : 'text/html'});
			res.end('<html><meta charset="utf-8" http-equiv="content-type" content="text/html"/>'+
			'<div>Domain :<span style="color:red">'+domain+'</span>'+
			'IP:<span style="color:red">'+addresses.join(',')+'</span></div></html>');
		})
		return;
	});
}
//异步解析域名
function getDns(postData,callback){
	var domain = querystring.parse(postData).search_dns;
	dns.resolve(domain,function(err,addresses){
		if(!addresses){
			addresses = ['不存在域名']
		}
		callback(domain,addresses)
	})
	
}