
var ParseDns = require('./parse_dns.js'),
    GoIndex = require('./go_index.js');
    
//将router方法暴露给外部接口
exports.router = function(req,res,pathname){
	switch (pathname){
		case '/parse':
		    ParseDns.parseDns(req,res)
		break;
		default:
		    GoIndex.goIndex(req,res)
	}
}