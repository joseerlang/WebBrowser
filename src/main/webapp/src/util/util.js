function getQuerystring()
{
  var str= window.location.href;
  if (str.indexOf("&") != -1){
     return decodeURI(str.substring(str.indexOf("?")+1,str.indexOf("&")));
  }else{
     return decodeURI(str.substring(str.indexOf("?")+1,str.length));	
  }
}

function delayedRedirect(){
	var str= window.location.href;
	if (str.indexOf("&") != -1){
			var host=window.location.host;
			window.location = decodeURI(str.substring(0,40+host.length)+str.substring(str.indexOf("&")+1,str.length));
			alert	
	}else{
		window.location = "/WebBrowser/finish.html";
	}    
}