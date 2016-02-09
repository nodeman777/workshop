
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
	if(this.path === '/'){
		this.body = 'hello world';
	}else{
		yield next;
	} 
});

app.use(function* (next) {
	if(this.path === '/404'){
		this.body = 'page not found';
	}else{
		yield next;
	}

});

app.use(function* (next) {
	if(this.path === '/500'){
		this.body = 'internal server error';
	}else{
		yield next;
	}
});
