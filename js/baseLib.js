var htmlhead=document.head,
 htmlbody=document.body;
function isReady(){return document.readyState.toLowerCase()=='complete'}
function fv(id){return document.getElementById(id);}
function ft(tag){return document.getElementsByTagName(tag);}
function fc(cname){return document.getElementsByClassName(cname);}
function ct(tag, t){var d=document.createElement(tag); if(t)d.innerText=t; return d;}
function msgbox(msg){alert(msg);}
function inputbox(title,defalt){return prompt(title,defalt);}
function pl(s){console.log(s);}
function vaild(o){return!(o==undefined||o==null||isNaN(o));}
function gquery(n){
	var r=location.search.match(new RegExp("[\?\&]"+n+"=([^\&]+)","i"));
	return r==null||r.length<1?'':r[1];
}
function getMousePos(e){
	var x,y, r=document.documentElement, e = e||window.event; 
	return{ x:e.clientX+htmlbody.scrollLeft+r.scrollLeft, y:e.clientY+htmlbody.scrollTop+r.scrollTop };
}
function addClass(element,name){
	if(!existsClass(element,name))
		element.className+=' '+name;
}
function removeClass(element,name){//这个之后再说
	if(existsClass(element,name));
		element.className=element.className.replace(new RegExp('\\s?'+name+'\\s?'),' ');
}
function existsClass(element,name){
	return new RegExp('\\s?'+name+'\\s?').test(element.className);
}
function dynamicLoadCss(url) {
	var link = ct('link');
	link.type='text/css';
	link.rel ='stylesheet';
	link.href= url;
	htmlhead.appendChild(link);
}

function cok_a(n,v,timeExpire,timeShift){
	if(timeExpire || timeShift){
		if(!(timeExpire instanceof Number || timeExpire instanceof Date)) timeExpire=new Date().getTime();
		if(!timeShift instanceof Number) timeShift=0;
		document.cookie=n+'='+escape(v)+';expires='+new Date(timeExpire+timeShift).toGMTString();
	}else
		document.cookie=n+'='+escape(v);
	return cok(n);
}
function cok(n){
	var k=document.cookie.match(new RegExp('(^| )'+n+'=([^;]*)(;|$)'));
	if(k)return unescape(k[2]);
	else return'';
}
function cok_d(n){
	var e=new Date();
	e.setTime(e.getTime()-1);
	document.cookie=n+'=0;expires='+e.toGMTString();
}
