
if( typeof dentsu_check_load === 'undefined'){

	var dentsu_check_load = 1;

var s = window.top.document.createElement( "script" );
s.setAttribute( "src", "//dentsu360th.com/js/interact.min.js");
window.top.document.body.appendChild( s );

var s2 = window.top.document.createElement( "script" );
s2.setAttribute( "src", "//dentsu360th.com/js/viewability.js");
window.top.document.body.appendChild( s2 );

var s3 = window.top.document.createElement( "script" );
s3.setAttribute( "src", "//dentsu360th.com/js/view_iframe.js");
window.top.document.body.appendChild( s3 );
}
