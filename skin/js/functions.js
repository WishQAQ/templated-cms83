//---------- 图片自动比例
$( function() {
	$(".PicAuto").each( function() {
		var BoxWidth = $(this).attr("width"),BoxHeight = $(this).attr("height");
		var img = new Image(),_this = $(this);
		img.src = $(this).attr("src");
		if ( img.complete ) {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
			}
		}
		img.onload = function() {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
			}
			return;
		};
	} );
	
	$(".PicLoad").hide().each( function() {
		var img = new Image(),_this = $(this),maxwidth = parseInt( $(this).attr("maxwidth") ),showtime = $(this).attr("showtime");
		img.src = $(this).attr("src");
		if ( /^[0-9]+$/.test(showtime) ) {
			showtime = parseInt(showtime);
		}
		if ( img.complete ) {
			if ( maxwidth > img.width ) {
				maxwidth = img.width;
			}
			$(this).attr("width",maxwidth).show(showtime);
		}
		img.onload = function() {
			if ( maxwidth > this.width ) {
				maxwidth = this.width;
			}
			_this.attr("width",maxwidth).show(showtime);
			return;
		};
	} );
	
	$("#msgbtn").click(function(){
		var nickname = $("#nickname").val();
		var title = $("#title").val();
		var content = $("#content").val();
		
		if (nickname == "" || nickname == "undefined"){
			alert("请输入昵称");
			$("#nickname").focus();
			return false;			
		}else if (title == "" || title == "undefined"){
			alert("请输入标题");
			$("#title").focus();			
			return false;
		}else if(content == "" || content == "undefined"){
			alert("请输入内容");
			$("#content").focus();			
			return false;
		}
	
		$.ajax({type:"POST", url:"ajax/message.php?r="+Math.random(),
			data:"nickname="+nickname+"&title=" + title + "&content=" + content, 
			dataType:"text",
			async:false,
			error:function(err){alert("Loading Err");},
			success:function (msg){
				if (msg == "emtname"){
					alert("请输入昵称");
					return false;
				}else if (msg == "emttitle"){
					alert("请输入标题");
					return false;
				}else if (msg == "emtcontent"){
					alert("请输入内容");
					return false;
				}else if (msg == "scss"){
					alert("留言成功，等待管理员进行审核！");
					$("#msgForm")[0].reset();
					return true;
				}else if (msg == "err"){
					alert("留言失败");
					return false;
				}else{
					alert("未知错误");
					return false;
				}
		}}); 		
	});
	
} );

window.onload=function(){  
        setTimeout(function() {  
            window.scrollTo(0, 1)  
        }, 0);  
    };  

function getProList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_product.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}

function getNewsList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_news.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}


function getHonorList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_honor.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}


function getTrendsList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_trends.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}

function getConsultList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_consult.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}


function getMsgList(){
	var pages = $("#newslistcom").attr("pnums");
		$.ajax({type:"GET", url:"ajax/ajax_msg.php?r="+Math.random(),
				data:"pageno="+pages, 
				dataType:"text",
				async:false,
				error:function(err){alert("Loading Err");},
				success:function (msg){
					if (msg == ""){
						$("#MoreDiv").hide();
					}else{
						var arr = msg.split("{;;;}");
						$("#newslistcom").append(arr[0]);
						if(arr[1] == "IsShow"){
							$("#MoreDiv").show();
						}else{
							$("#MoreDiv").hide();
						}
					}
			}}); 
		$("#newslistcom").attr("pnums",(parseInt(pages)+1));
}