<?php
$z[0]=Array("field","",254,273);
$z[0][4]['name']="title";
$z[1]=Array("global","",274,300);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",341,370);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",410,468);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1207,1242);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1446,1504);
$z[5][4]['name']="typeid";
$z[5][4]['function']="GetTopTypename(@me)";
$z[6]=Array("channel","\r\n        <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n        ",1561,1795);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<li><a href='~typelink~' class='cu'>~typename~</a></li>";
$z[7]=Array("field","",2366,2395);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n        <li>\r\n          <div class=\"imger\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\"><img src=\"[field:picname/]\" class=\"PicAuto\" alt=\"[field:title/]\" width=\"224\" height=\"83\" /></a></div>\r\n          <div class=\"chawr\">\r\n            <h4><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n              <div class=\"c\"></div>\r\n            </h4>\r\n            <h6> <em><a href=\"[field:arcurl/]\" title=\"更多\"><img src=\"/skin/images/gaa.jpg\" alt=\"更多\" width=\"62\" height=\"24\" /></a></em> <span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span></h6>\r\n          </div>\r\n          <div class=\"c\"></div>\r\n        </li>\r\n        ",2458,3146);
$z[8][4]['pagesize']="5";
$z[9]=Array("pagelist","",3193,3259);
$z[9][4]['listitem']="index,end,pre,next,pageno";
$z[9][4]['listsize']="5";
$z[10]=Array("include","",3373,3410);
$z[10][4]['filename']="footer.htm";

?>