
  window.addEventListener( "message",
       function (e) {
            if(e.data.indexOf("dentsuview") == -1 ){ return; }
            var zidre= e.data.split("_");
            var zid = zidre[1];
            top.postMessage("dentsu_re_"+zid,"*");
            var s = document.createElement( "script" );
            s.setAttribute( "src", "//dentsu360th.com/view_impression.php?cid=167&bid=1391&aid=9&pid=3&zid=879" );
            document.body.appendChild( s );
       },
       false);

  
