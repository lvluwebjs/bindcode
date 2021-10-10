// 引入封装后的请求方法
import ajax from '../utils/request.js' 
//集中管理所有页面请求
 function login(){
	return ajax(
	// 以下对象相当于参数obj
	{
	    url: 'login.json',
		method: 'get',
		// contentType:'application/x-www-form-urlencoded',
		// data: data 所携带参数
	 }
	 
	 )
}
function test(){
	return ajax(
	// 以下对象相当于参数obj
	{
	    url: 'news.json',
		method: 'get',
		// contentType:'application/x-www-form-urlencoded',
		// data: data 所携带参数
	 }
	 
	 )
}
//倒出方法
export{
	login,
	test
}