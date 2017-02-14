var dentsuAdsView = null;
var denSuElapsedTime = 0 ;
var dentSustartOfElapsedTime = -1 ; // -1 means not started
var findstat = 0;
var dentsuIframePost = [];
var isDentsuviewZid = [];
var d_isDentsuviewZidDone = [];
var d_viewInterval = [];
var d_postIframeInterval = [];

var findIFrameInterval = setInterval(function () {
 findDentsuIFrame();
}, 500);
setTimeout(function(){ clearInterval(findIFrameInterval) }, 15000);
function d_getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function findDentsuIFrame(){
  var alliFrame = window.top.document.getElementsByTagName("iframe");
  for (var i=0, max=alliFrame.length; i < max; i++) {
  	 try {
  		 findDentsuAds(alliFrame[i]);
  	 }catch(err) {	 }
  }
  var alliDiv = window.top.document.getElementsByTagName("div");
  for (var i=0, max=alliDiv.length; i < max; i++) {
       d_finddensuTop(alliDiv[i]);
  }
}
function d_finddensuTop(doc){
  var zid=doc.getAttribute("data-dzid");
  if(zid != null){
      var localBannerVar = {};
      localBannerVar.zid = doc.getAttribute("data-dzid");
      localBannerVar.cid = doc.getAttribute("data-dcid");
      localBannerVar.bid = doc.getAttribute("data-dbid");
      localBannerVar.aid = doc.getAttribute("data-daid");
      localBannerVar.pid = doc.getAttribute("data-dpid");

      setDentsuAdsCheck(doc,zid,localBannerVar);
  }
}
function findZidInFrame(iframeData){
  var alliScript = iframeData.getElementsByTagName("script");
  for (var i=0, max=alliScript.length; i < max; i++) {
    if(alliScript[i].src != null && alliScript[i].src.indexOf("dentsu360") > -1 && alliScript[i].src.indexOf("zid") > -1){
        return d_getParameterByName("zid",alliScript[i].src);
    }
  }
}
function findAdsDataInFrame(iframeData){
  var alliScript = iframeData.getElementsByTagName("div");
  var localBannerVar = {};
  for (var i=0, max=alliScript.length; i < max; i++) {
    if(alliScript[i].getAttribute("data-dzid") != null ){
      localBannerVar.zid = alliScript[i].getAttribute("data-dzid");
      localBannerVar.cid = alliScript[i].getAttribute("data-dcid");
      localBannerVar.bid = alliScript[i].getAttribute("data-dbid");
      localBannerVar.aid = alliScript[i].getAttribute("data-daid");
      localBannerVar.pid = alliScript[i].getAttribute("data-dpid");
      return localBannerVar;
    }
  }
  return localBannerVar;
}
function findDentsuAds(doc){
  if(doc.src != null && doc.src.indexOf("dentsu360") > -1  && doc.src.indexOf("zid") > -1 &&  doc.src.indexOf("adshow") > -1){

    // dentsu360 iframe doesn't have permission to read more than source
    var zid = doc.getAttribute("data-dzid");

    if(zid == null ){      //&& doc.src.indexOf("adshow") > -1
      var zidBanner = d_getParameterByName("zid",doc.src);
      setDentsuAdsCheck(doc,zidBanner);
      return;
    }else if(zid != null ){
      var localBannerVar = {};
      localBannerVar.zid = doc.getAttribute("data-dzid");
      localBannerVar.cid = doc.getAttribute("data-dcid");
      localBannerVar.bid = doc.getAttribute("data-dbid");
      localBannerVar.aid = doc.getAttribute("data-daid");
      localBannerVar.pid = doc.getAttribute("data-dpid");
      setDentsuAdsCheck(doc,zid,localBannerVar);
    }

  }
  var inIframe = doc.contentWindow.document; // self iframe have permisstion
	if(inIframe.getElementById("addoer_pushdown2") != null){
  // found script
    var zid = findZidInFrame(doc.contentWindow.document);
    var localData = findAdsDataInFrame(doc.contentWindow.document);

    setDentsuAdsCheck(doc,zid,localData);
    return;
  }
}
function setDentsuAdsCheck(e,zid,localBannerVar = {}){
  var founded = d_isDentsuviewZidDone.indexOf(zid);
  if(isDentsuviewZid.indexOf(zid) == -1 && founded == -1){
    isDentsuviewZid.push(zid);
    if(e.contentWindow != undefined){
      dentsuIframePost.push(e.contentWindow);
    }
    var subInterval = setInterval(function () {
     calculate(e,zid,localBannerVar);
   }, 1000);
    d_viewInterval.push(subInterval);
  }
}
function calculate(el,zid,localBannerVar = {}) {
	var v = viewability.vertical(el);
	var h = viewability.horizontal(el);
	var combined = h.value * v.value;
	if (combined > 0.5) {
		if (denSuElapsedTime === 0 && dentSustartOfElapsedTime === -1) {
			dentSustartOfElapsedTime = Date.now();
		}
		denSuElapsedTime = Date.now() - dentSustartOfElapsedTime;
	} else {
		denSuElapsedTime = 0;
		dentSustartOfElapsedTime = -1; // resets to non-started position
	}

	if(combined.toFixed(2) >= 0.5 ){
      if(localBannerVar.bid == undefined){
        try {
         var indexOfZid = isDentsuviewZid.indexOf(zid);
         var timeViewInterval = setInterval(function () {
           dentsuIframePost[indexOfZid].postMessage("dentsuview_"+zid, "*");
          // console.log("sendPost");
        }, 1000);
        d_postIframeInterval[indexOfZid] = timeViewInterval;
        clearInterval(d_viewInterval[indexOfZid]);
         }catch(err) {	 }
      }else{
         var indexOfZid = isDentsuviewZid.indexOf(zid);
        var s = document.createElement( "script" );
        s.setAttribute( "src", "//dentsu360th.com/view_impression.php?cid="
        +localBannerVar.cid+"&bid="+ localBannerVar.bid+"&zid="+ localBannerVar.zid
      +"&aid="+ localBannerVar.aid+"&pid="+ localBannerVar.pid);
        document.body.appendChild( s );
        d_isDentsuviewZidDone.push(zid);
        clearInterval(d_viewInterval[indexOfZid]);

      }
	}
}
window.addEventListener( "message",
	 function (e) {
     if(e.data.indexOf("dentsu_re") == -1 ){ return; }
     var zidre= e.data.split("_");
     var zid = zidre[2];
     var indexOfZid = isDentsuviewZid.indexOf(zid);
     clearInterval(d_postIframeInterval[indexOfZid]);
     d_isDentsuviewZidDone.push(zid);
	 },false);

