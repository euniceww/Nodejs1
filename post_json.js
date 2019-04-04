var http=require('http');
 
 
 
var post_data={"query":{"match":{"imtype":"LTCUS"}},"sort":[{"rtdatetime":{"order":"desc"}}],
    "size":3}//这是需要提交的数据
 
var content=JSON.stringify(post_data);
 
 
 
var options = {
 
  host: 'localhost',
 
  port: 3000,
 
  path: '/add',
 
  method: 'POST',
 
  headers:{
 
  'Content-Type':'application/json',
 
  'Content-Length':content.length
 
  }
 
};
var req = http.request(options, function(res) {
	console.log("post a request")
})
 req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
  

req.write(content);  
  
req.end();


