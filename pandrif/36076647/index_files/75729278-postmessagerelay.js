var g=this,q=function(a,b){a=a.split(".");var c=g;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c[d]:c[d]={}:c[d]=b},r=function(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.m=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);var aa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},u=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},v=function(a,b){return a<b?-1:a>b?1:0};var w=function(a,b){b.unshift(a);t.call(this,aa.apply(null,b));b.shift()};r(w,t);var x=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new w(""+d,e||[]);}};var ba=Array.prototype.forEach?function(a,b,c){x(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};var y;a:{var z=g.navigator;if(z){var A=z.userAgent;if(A){y=A;break a}}y=""}var B=function(a){return-1!=y.indexOf(a)};var da=function(a,b){var c=ca;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var ea=B("Opera"),C=B("Trident")||B("MSIE"),fa=B("Edge"),D=B("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),E=-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge"),ga=E&&B("Mobile"),F=function(){var a=g.document;return a?a.documentMode:void 0},G;
a:{var H="",I=function(){var a=y;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fa)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(E)return/WebKit\/(\S+)/.exec(a);if(ea)return/(?:Version)[ \/]?(\S+)/.exec(a)}();I&&(H=I?I[1]:"");if(C){var J=F();if(null!=J&&J>parseFloat(H)){G=String(J);break a}}G=H}
var K=G,ca={},L=function(a){da(a,function(){for(var b=0,c=u(String(K)).split("."),d=u(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=v(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||v(0==h[2].length,0==k[2].length)||v(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})},M;var N=g.document;
M=N&&C?F()||("CSS1Compat"==N.compatMode?parseInt(K,10):5):void 0;var O;if(!(O=!D&&!C)){var P;if(P=C)P=9<=Number(M);O=P}O||D&&L("1.9.1");C&&L("9");var ha=B("Safari")&&!((B("Chrome")||B("CriOS"))&&!B("Edge")||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"));var R=function(a){var b=window;if(ga&&ha&&b){b.focus();var c=0,d=null,d=b.setInterval(function(){a.closed||5==c?(b.clearInterval(d),Q(a)):(a.close(),c++)},150)}else a.close(),Q(a)},Q=function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,x(null!=a,"goog.dom.setTextContent expects a non-null value for node"),"textContent"in a)a.textContent="Please close this window.";else if(3==a.nodeType)a.data="Please close this window.";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=
a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Please close this window."}else{for(var b;b=a.firstChild;)a.removeChild(b);x(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please close this window."))}};var ia=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,
d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};var ja=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],n=e[3],k=e[4],l,m,c=0;80>c;c++)40>c?20>c?(l=n^d&(f^n),m=1518500249):(l=d^f^n,m=1859775393):60>c?(l=d&f|n&(d|f),m=2400959708):(l=d^f^n,m=3395469782),l=((a<<5|a>>>27)&4294967295)+l+k+m+b[c]&4294967295,
k=n,n=f,f=(d<<30|d>>>2)&4294967295,d=a,a=l;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;e[3]=e[3]+n&4294967295;e[4]=e[4]+k&4294967295}function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[l++]=a[d++],p++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}function d(){var a=[],d=8*p;56>l?c(k,56-l):c(k,
64-(l-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var m=24;0<=m;m-=8)a[d++]=e[h]>>m&255;return a}for(var e=[],f=[],h=[],k=[128],m=1;64>m;++m)k[m]=0;var l,p;a();return{reset:a,update:c,digest:d,digestString:function(){for(var a=d(),c="",b=0;b<a.length;b++)c+="0123456789ABCDEF".charAt(Math.floor(a[b]/16))+"0123456789ABCDEF".charAt(a[b]%16);return c}}};var la=function(a,b,c){var d=[],d=[b,a];ba(c,function(a){d.push(a)});return ka(d.join(" "))},ka=function(a){var b=ja();b.update(a);return b.digestString().toLowerCase()};var ma=function(a){var b=a||[];a=[];for(var c=0,d=b.length;c<d;++c){var e=String(b[c]||"");e&&a.push(e)}if(2>a.length)return null;b=a[0];c=gadgets.rpc.getOrigin(a[1]);if(c!==a[1])return null;a=a.slice(2);return(a=(c&&b?["session_state",la(ia(c),b,a||[])].join(" "):null)||"")&&a.substr(14)||null},na=function(a,b,c){this.i=String(a||"");this.f=String(b||"");this.a=String(c||"");this.b={};this.j=this.l=this.g=this.h="";this.c=null};
na.prototype.evaluate=function(){var a={},b="";try{b=String(document.cookie||"")}catch(h){}for(var b=b.split("; ").join(";").split(";"),c=0,d=b.length;c<d;++c){var e=b[c],f=e.indexOf("=");-1!=f?a[e.substr(0,f)]=e.substr(f+1):a[e]=null}this.b=a;if(this.b.SID)if(this.f=this.f.split(".")[0].split("@")[0],this.g=String(this.b[0==this.i.indexOf("https://")?"SAPISID":"APISID"]||""))if(a=0==gadgets.rpc.getOrigin(String(window.location.href)).indexOf("https://")?"SAPISID":"APISID",this.h=String(this.b[a]||
"")){b=String(this.b.LSOLH||"").split(":");c=b.length;if(1==c||4==c)this.l=b[0];if(3==c||4==c)a=String(b[c-3]||""),b=String(b[c-1]||""),c=this.h,a?(d=[a],c&&d.push(c),c=ka(d.join(" ")).substr(0,4)):c=null,c===b&&(this.j=a);this.a&&(a=this.a.indexOf("."),-1!=a&&(a=this.a.substr(0,a)||"",this.a=a+"."+ma([this.g,this.i,this.f,this.l,this.j,a]).substr(0,4)));a=ma([this.g,this.i,this.f,this.a]);this.a&&(a=a+"."+this.a);this.c=a}else this.c="";else this.c=""};
var oa=function(a,b,c){a=new na(a,b,c);a.evaluate();return a},S=function(a,b,c){c=c||pa(this);var d=null;if(a){a=String(a);var e=a.indexOf(".");-1!=e&&(d=a.substr(e+1))}b=oa(c,b,d).c;if(null==a||""==a)a=b==a;else if(null==b||b.length!=a.length)a=!1;else{d=c=0;for(e=a.length;d<e;++d)c|=a.charCodeAt(d)^b.charCodeAt(d);a=0==c}return a},T=function(a,b,c){c=c||pa(this);c=oa(c);if(String(a)!=c.c)throw Error("Unauthorized request");b=String(b);a=parseInt(b,10);String(a)==b&&0<=a?(b=c.j)?(b=b.split("|"),
a=b.length<=a?null:b[a]||null):a=null:a=null;return a},pa=function(a){a=String(a.origin||"");if(!a)throw Error("RPC has no origin.");return a};q("checkSessionState",S);q("getVersionInfo",T);var U,V,W,X,Y,Z,qa=window,ra=(window.location.href||qa.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/)||[];
"1"===decodeURIComponent(ra[ra.length-1]||"")?(W=function(a,b,c,d,e,f){U.send(b,e,d,f||gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)},X=function(a,b){U.register(a,b,gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)},Y=function(a){var b=/^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a),b=gapi.iframes.makeWhiteListIframesFilter([b?b[0]:null]);W("..","oauth2callback",gadgets.rpc.getAuthToken(".."),void 0,a,b)},V=function(){sa()},Z=function(){W("..","oauth2relayReady",gadgets.rpc.getAuthToken(".."));X("check_session_state",
ta);X("get_versioninfo",ua)}):(W=function(a,b,c,d,e){gadgets.rpc.call(a,b+":"+c,d,e)},X=function(a,b){gadgets.rpc.register(a,b)},Y=function(a){gadgets.rpc.getTargetOrigin("..")==gadgets.rpc.getOrigin(a)&&W("..","oauth2callback",gadgets.rpc.getAuthToken(".."),void 0,a)},V=function(){Z()},Z=function(){W("..","oauth2relayReady",gadgets.rpc.getAuthToken(".."));X("check_session_state",S);X("get_versioninfo",T)});
var sa=function(){var a=Z;window.gapi.load("gapi.iframes",function(){U=gapi.iframes.getContext().getParentIframe();a()})},va=function(a){window.setTimeout(function(){Y(a)},1)},ta=function(a){var b,c;a&&(b=a.session_state,c=a.client_id);return S(b,c,U.getOrigin())},ua=function(a){return T(a.xapisidHash,a.sessionIndex,U.getOrigin())},wa=!1,xa=!1,ya=function(){xa=!0;wa&&V()};q("oauth2callback",va);
q("oauth2verify",function(a,b){var c=window.open("javascript:void(0);",a),d;if(c&&!c.closed&&(d=c.oauth2callbackUrl))return window.timeoutMap=window.timeoutMap||{},window.realSetTimeout=window.realSetTimeout||window.setTimeout,window.setTimeout=function(a,b){try{var d=a,e=!1,f;a=function(){if(!e){e=!0;try{window.timeoutMap[String(f)]=void 0,delete window.timeoutMap[String(f)]}catch(p){}return d.call(this)}};var l=c.setTimeout(a,b);f=window.realSetTimeout(a,b);window.timeoutMap[String(f)]=l;return f}catch(p){}return window.realSetTimeout(a,
b)},window.realClearTimeout=window.realClearTimeout||window.clearTimeout,window.clearTimeout=function(a){try{var b=window.timeoutMap[String(a)];b&&c.clearTimeout(b)}catch(h){}try{window.timeoutMap[String(a)]=void 0,delete window.timeoutMap[String(a)]}catch(h){}window.realClearTimeout(a)},va(String(d)),"keep_open"!=b&&R(c),!0;c&&!c.closed&&R(c);return!1});q("init",function(){wa=!0;xa&&V()});window.addEventListener?window.addEventListener("load",ya,!1):window.attachEvent("onload",ya);
