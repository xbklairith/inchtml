//Generated at 2017-01-09 20:09:43 PM
var T='//avd.innity.com',cZ;try{cZ=window.parent.parent.document?window.parent.parent:window;}catch(bi){try{cZ=window.parent.document?window.parent:window;}catch(bi){cZ=window;}}try{if(typeof cZ._iampt==='undefined'){_iampt={aJ:0,bO:[],bA:document.domain,F:'',aG:'',l:'',t:{},ay:[],bF:'',bC:'',aW:{},bU:'avd_',ap:window.innityDataLayer|| !1,ah:true,ac:24*60*60*1000,du:7*24*60*60*1000,_iampt:function(){return this;},_setAccount:function(ce){if(!this.aJ){this.aJ=this.aT(ce);}},_initAccount:function(ce){this._setAccount(ce);},_setDomains:function(ce){this.bO=ce;},_setFilterKeywords:function(ce){this.bC=ce;},_segmentPiggyback:function(ce){if(typeof ce[0]==='string'){ce[0]=new Array(ce[0]);}return this._segmentTarget._search(ce);},_setUserId:function(ce){this.aG=ce;},_setMeta:function(aa){var bf,ct;if(!aa._metaAttr)return!1;try{bf=parent.parent.document.getElementsByTagName('meta');}catch(bi){try{bf=document.getElementsByTagName('meta');}catch(bi){}}try{this.aW[this.bU+aa._metaParam]=[];for(i=0;i<bf.length;i++){if(bf[i].getAttribute(aa._metaAttr)==aa._metaAttrName){ct=bf[i].getAttribute('content').replace(/(^\s+|\s+$)/g,'');this.aW[this.bU+aa._metaParam].push(ct);}}}catch(bi){}},_disableDomainCheck:function(){this.ah=false;},_getUUID:function(cv){return _iampt.bE.bQ('iUUID')?_iampt.bE.bQ('iUUID'):cv._callbackFunc&&this.dC(cv)&& !1;},_trackDC:function(){this.l='dc';this.F=this.aS();if(this.F){this.ag();this.cb.da();}},_track:function(cY,cd){this.l=cY;if(this.F){if(this.l=='event'){this._trackEvent(cd);}else{this.ag();}}},_trackSocialHub:function(H,C,bp,bk,L){this.l='sh';this.F=this.bE.bQ('iUUID');this.t={"H":H,"C":C,"bp":bp,"bk":bk,"L":L};if(this.F)this.ag();},_trackEvent:function(bI){this.l='event';this.F=this.bE.bQ('iUUID');this.ay=bI;if(this.F&&this.ay.length)this.ag();},_pixel:function(cv){try{if(!this.aJ|| !cv.type)return!1;(new Image()).src=T+"/px/?cuid="+this.F+"&cl="+this.aJ+"&id="+cv.id+"&t="+cv.type+"&itmcb="+new Date().getTime();}catch(bi){}},_customPixel:function(cv){try{if(!cv.hasOwnProperty("url"))return!1;(new Image()).src=cv.url+(/[?]/.test(cv.url)?"&":"?")+"itmcb="+new Date().getTime();}catch(bi){}},_piggybackPixel:function(bI){(new Image()).src=(/[?]/.test(bI)?bI+'&itmcb=':bI+'?itmcb=')+new Date().getTime();},_getDingo:function(ce){return this.aJ?{"u":this.F||this.aS(),"cl":this.aJ,"h":this.bA,"t":this.bu.aR(this.bZ().dA)}:{};},_matchPageContent:function(ce){for(var keywords=ce.k||[],cL=0;cL<keywords.length;cL++){var cJ=new RegExp("\\b"+keywords[cL]+"\\b","i").test(_iampt.bZ().dA);if(cJ)return!0;}return!1;},_getTracker:function(ba){if(typeof ba=='undefined')return!1;this._setAccount(ba);return this;},_dataIntegration:function(bH,bh,type){var bG=this.aS();var source=T+'/sync/?partner='+bh+'&cuid='+bG+'&token='+bH+'&type='+type+'&cb='+new Date().getTime();this.au(source);},_cmd:function(command){try{var method=command.shift();this[method].apply(this,command);}catch(bi){}},_cbUC:function(aD){if(aD.hasOwnProperty('iuuid')){this.F=aD['iuuid'];this.aF();}},ag:function(){if(this.l=='')return!1;var bD=this.bZ(),dh=this.cC(),source=T+'/'+(this.l==='event'?'event':'dc')+'/?cl='+this.aJ+'&cuid='+this.F+'&cb='+new Date().getTime(),bm=bD.bg?/[?]/.test(bD.bg):0,di=[],bN=[],bw=1,aj,aV=0,aN=window;source+=this.ap&&this.ap.user&&this.ap.user.id?'&douid='+this.ap.user.id:(this.aG?'&douid='+this.aG:'');source+=dh.aP?'&sess='+dh.aP+'&dur='+dh.aw:'';if(!(JSON.stringify(this.aW)==='{}')){for(bc in this.aW){if(this.aW.hasOwnProperty(bc)&&this.aW[bc].length>0){bD.bg+=(bw==1?(bm?'&':'?'):'&')+bc+'='+this.aW[bc].join(',').toLowerCase();bw++;}}}source+='&ref='+encodeURIComponent(bD.bg);source+=bD.dg?'&srf='+encodeURIComponent(bD.dg):'';source+=bD.dA?'&pk='+this.bu.aR(bD.dA):'';source+=bD.dA?'&pt='+this.bu.bY(bD.dA):'';if(!(JSON.stringify(this.t)==='{}')){for(bV in this.t){if(!this.t.hasOwnProperty(bV)||this.t[bV]=='')continue;if('sht'==bV){bN.push('shareto_'+this.t['sht']);}else if('keyw'==bV){bN.push(this.t[bV].split(',').join('~'));}else{bN.push(this.t[bV]);}}source+='&action='+bN.filter(Boolean).join('~');}if(this.l=='event'){for(ei in this.ay)di.push(encodeURIComponent(this.ay[ei]));source+='&action='+di.join('~');}try{source+='&sr='+window.screen.width+'x'+window.screen.height;source+='&vp='+Math.max(document.documentElement.clientWidth,document.documentElement.offsetWidth,document.documentElement.scrollWidth)+'x'+document.documentElement.clientHeight;}catch(bi){}if(this.l!='dc'){this.au(source);}else{try{aj=aN.parent.parent._innitydc;aV=2;}catch(bi){try{aj=aN.parent._innitydc;aV=1;}catch(bi){aj=aN._innitydc;}}(aV?(aV==1?aN.parent:aN.parent.parent):aN)._innitydc= !0;if(!aj)this.au(source);}},au:function(source){(new Image()).src=source;},dC:function(cv){var aE=T+'/dc/cb/?mt='+cv._callbackFunc;return this.F||(aE+=',_iampt._cbUC'),this.bE.aA(aE),!0;},aq:function(){var aE=T+'/dc/cb/?mt=_iampt._cbUC';this.bE.aA(aE);},aF:function(){if(Object.prototype.toString.call(this.bO)!=='[object Array]')return!1;var i,ao=730,bS=document.domain,K=new Date();K.setTime(K.getTime()+(ao*24*60*60*1000));var bM='; expires='+K.toGMTString();if(this.ah){for(i=0;i<this.bO.length;i++){if(bS.indexOf(this.bO[i])> -1){this.bA=this.bO[i];break;}}}if(this.F==='')return!1;try{document.cookie='iUUID'+'='+this.F+bM+'; domain='+this.bA+'; path=/';}catch(bi){}this.ag();},aS:function(){if(Object.prototype.toString.call(this.bO)!=='[object Array]')return!1;var by='iUUID';var ai=by+'=';var bP=document.cookie.split(';');var R='';var bS=document.domain;var bs=false;if(this.ah){for(i=0;i<this.bO.length;i++){if(bS.indexOf(this.bO[i])> -1){bs=true;this.bA=this.bO[i];break;}}if(!bs)return!1;}for(var i=0;i<bP.length;i++){var c=bP[i];while(c.charAt(0)===" ")c=c.substring(1,c.length);if(c.indexOf(ai)===0){R=c.substring(ai.length,c.length);if(R.length>32)break;return R;}}this.aq();return!1;},aT:function(ce){var ae=ce.split('-',3);return parseInt(ae[1]);},cC:function(){var cz='innity.dingo.dc.sess',aP='innity.dingo.dc.sess.id',cQ=30*60*1000,cc=new Date().getTime(),aw=0,al,bb,bv;try{if(this.bE.bQ(aP)){bb=this.bE.bQ(cz).split('.');al=bb[1];aw=cc-bb[3];bv=(parseInt(bb[0])+1)+'.'+al+'.'+bb[3]+'.'+cc;}else{bv=1+'.'+cc+'.'+cc+'.'+cc;}this.bE.ar(this.bA,cz,bv,cQ);this.bE.ar(this.bA,aP,this.bE.bQ(aP)||this.bE.dH(this.F)+'.'+this.aJ+'.'+cc,30*60*1000);}catch(bi){}return{aP:this.bE.bQ(aP),aw:Math.round(aw/1000)};},bZ:function(){var aU='',ax='',aL='',bq='';try{aU=window.parent.parent.document.domain;}catch(bi){aU=document.domain;}try{ax=window.parent.parent.document.URL;}catch(bi){ax=document.referrer?document.referrer:document.URL;}try{aL=window.parent.parent.document.referrer;}catch(bi){aL=document.referrer;}try{bq=window.parent.parent.document.title;}catch(bi){bq=document.title;}return{dR:aU,dA:bq,bg:ax,dg:aL};},push:function(bI){try{if(typeof bI==='function')bI.call(window);else{var method=bI.shift();this[method].apply(this,bI);}}catch(bi){}}};_iampt.bu={bY:function(value){if(_iampt.bC==''||_iampt.bC.toLowerCase().split(',').length<=0)return value.replace(/\s{2,}/g,' ').trim();try{var bJ=_iampt.bC.toLowerCase().split(','),cP=new RegExp('[^\u0000-\u0080]+');dp=new RegExp('[$-/:-?{-~!"^_`\\[\\]]$');value=this.maxLength(value,1000);while(bJ.length){var word=bJ.shift();var match=new RegExp('\\b'+word+'\\b','ig');if(cP.test(word)){match=new RegExp(word,'g');}value=value.replace(match,'');}value=value.replace(/\s{2,}/g,' ').trim();value=value.replace(dp,'');value=value.replace(/\s{2,}/g,' ').trim();return value;}catch(bi){return value.replace(/\s{2,}/g,' ').trim();}},aR:function(value){var bJ='you,she,he,whom,whose,her,his,them,they,we,us,who,why,what,when,where,how,and,or,if,to,for,from,since,the,are,is,but,however,whenever,whereever,about'.split(','),dN=['(',')','*','!','@','#','$','%','^','=','+','_','"','\'',';','<','>','.','?','/','~'].concat('《;》;〈;〉;【;】;（;）;「;」'.split(';')),cS=(' -,-:-;'.split('-')).concat('：;。;、;‧;——;～;，;？;；;！'.split(';'));var ak=[],aQ,cP=new RegExp('[^\u0000-\u0080]+'),cp=new RegExp('['+cS.join('')+']+');value=value.toLowerCase();if(_iampt.bC!==''&&(aQ=_iampt.bC.toLowerCase().split(','))&&aQ.length>0)bJ=bJ.concat(aQ);try{value=this.maxLength(value,1000);while(bJ.length){var word=bJ.shift();var match=new RegExp('\\b'+word+'\\b','g');if(cP.test(word)){match=new RegExp(word,'g');}value=value.replace(match,'');}value=_iampt.bE.aB(dN,'',value);value=value.replace(/\s{2,}/g,' ').trim();}catch(bi){}value=value.split(cp);value.forEach(function(val){var cX=cP.test(val)?1:2;if(val.length>cX)ak.push(val);});return _iampt.bE.cr(ak);},maxLength:function(value,max){if(value.length>max){value=(value.lastIndexOf(' ')>max)?value.substr(0,max):value;value=value.substr(0,value.lastIndexOf(' '));}return value;}};_iampt._segmentTarget={ad:[],_search:function(ce){var aE=T+'/dc/cb/st/?mt=_iampt._segmentTarget._cbSS',aI=this.bo(),an,bn;try{an=ce[0],bn={src:decodeURIComponent(ce[1])};aI.aY?(this.ad.push({an:an,bn:bn}),_iampt.bE.aA(aE)):this.az(an,aI.bd)&&_iampt.bE.bK(bn);}catch(bi){}},_cbSS:function(be){var dq;try{_iampt.bE.aO('innity.dingo.us',be,_iampt.ac),_iampt.bE.aO('innity.dingo.us.ts',new Date().getTime(),_iampt.ac);for(;this.ad.length;)dq=this.ad.shift(),this.az(dq.an,be)&&_iampt.bE.bK(dq.bn);}catch(bi){}},bo:function(){var aI={};(!_iampt.bE.am("innity.dingo.us")|| !_iampt.bE.am("innity.dingo.us.ts")||(new Date).getTime()-parseInt(_iampt.bE.am("innity.dingo.us.ts"))>_iampt.ac)&&(aI.aY= !0);aI.bd=_iampt.bE.am('innity.dingo.us');return aI;},az:function(an,be){var i;be=be.split(',');for(i=0;i<an.length;i++){if(-1!=be.indexOf(an[i]))return!0;}return!1;}};_iampt.cb={da:function(){var aC=[{"vendor":'adnxs',"cu":'//ib.adnxs.com/getuid?'+encodeURIComponent('//avd.innity.com/sync/?partner=appnexus&token=$UID&type=cookie&itmcb='+new Date().getTime())}];for(var J=0;J<aC.length;J++){var dc=aC[J];var af='innity.dingo.cks.'+dc.vendor;if(!_iampt.bE.bQ(af)){(new Image()).src=dc.cu;_iampt.bE.ar(_iampt.bA,af,'1',_iampt.du);}}}};_iampt.bE={cr:function(array){var n={},r=[],i;for(i=0;i<array.length;i+=1){if(!n[array[i]]){n[array[i]]=true;r.push(array[i]);}}return r;},cq:function(dM,dn){return decodeURIComponent((new RegExp('[?|&]'+dn+'='+'([^&;]+?)(&|#|;|$)').exec(dM)||[,""])[1].replace(/\+/g,'%20'))||null;},ar:function(domain,key,value,expires){var K=new Date();K.setTime(K.getTime()+expires);var bM="; expires="+K.toGMTString();document.cookie=key+'='+value+bM+'; domain='+domain+'; path=/';},bQ:function(av){var bj=document.cookie.match(av+'=([^;]*)');return(bj&&decodeURIComponent(bj[1]))||false;},aO:function(av,aK,bB){if(window.localStorage){window.localStorage[av]=aK;}else if(navigator.cookieEnabled){this.ar(_iampt.bA,av,aK,bB);}},am:function(av){var result;if(window.localStorage){return window.localStorage[av]||false;}else if(navigator.cookieEnabled){result=document.cookie.match(av+'=([^;]*)');return(result&&decodeURIComponent(result[1]))||false;}else{return "";}},aA:function(aE){var G=document.createElement('script');G.type='text/javascript';G.async=true;G.src=aE;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(G,s);},bK:function(bn){if(typeof bn=='object'&&typeof bn.src){var iframe=document.createElement('iframe');iframe.id='avd_pbt_frame_'+new Date().getTime();iframe.src="javascript:'<html><body style=\"background:transparent\"></body></html>'";iframe.width=iframe.height=1;iframe.frameBorder=iframe.marginWidth=iframe.marginHeight=0;iframe.scrolling='no';iframe.style.width='0px';iframe.style.height='0px';iframe.style.border='0px none';try{document.getElementsByTagName('body')[0].appendChild(iframe);var bL=iframe.contentDocument?iframe.contentDocument:(iframe.contentWindow?iframe.contentWindow.document:iframe.document);bL.open();bL.write(decodeURIComponent(bn.src));bL.close();}catch(bi){}}},aB:function(search,replace,aH,count){var i=0,O=0,v='',bx='',bz=0,aZ=0,f=[].concat(search),r=[].concat(replace),s=aH,aX=Object.prototype.toString.call(r)==='[object Array]',aM=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(typeof(search)==='object'&&typeof(replace)==='string'){v=replace;replace=[];for(i=0;i<search.length;i+=1){replace[i]=v;}v='';r=[].concat(replace);aX=Object.prototype.toString.call(r)==='[object Array]';}if(count){this.window[count]=0;}for(i=0,bz=s.length;i<bz;i++){if(s[i]===''){continue;}for(O=0,aZ=f.length;O<aZ;O++){v=s[i]+'';bx=aX?(r[O]!==undefined?r[O]:''):r[0];s[i]=(v).split(f[O]).join(bx);if(count){this.window[count]+=((v.split(f[O])).length-1);}}}return aM?s:s[0];},dH:function(ab){var a=1,c=0,h,o;if(ab){a=0;for(h=ab["length"]-1;h>=0;h--){o=ab.charCodeAt(h);a=(a<<6&268435455)+o+(o<<14);c=a&266338304;a=c!=0?a^c>>21:a}}return a;}};}}catch(bi){}try{var _innityoq=[];try{while(window._innityq.length)window._innityoq.push(window._innityq.shift());}catch(bi){}try{while(window.parent._innityq.length)window._innityoq.push(window.parent._innityq.shift());}catch(bi){}try{while(window.parent.parent._innityq.length)window._innityoq.push(window.parent.parent._innityq.shift());}catch(bi){}try{window._innityq=_iampt;while(window._innityoq.length){var V=[];V.push(window._innityoq.shift());window._innityq.push.apply(window._innityq,V);}cZ._innityq=window._innityq;cZ._iampt=window._innityq;}catch(bi){}}catch(bi){} 