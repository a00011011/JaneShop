/*首页大屏广告效果*/
$(function(){
	var $imgrolls = $("#jnImageroll div a");
	$imgrolls.css("opacity","0.7");
	var len = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	//滑入停止动画，滑出开始动画
	$("#jnImageroll").hover(function(){
		if (adTimer) {
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if (index==len) {index=0;}
		},5000);
	}).trigger("mouseleave");
});
// 显示不同的幻灯片
function showImg(index){
	var $rolllist = $("#jnImageroll").find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
					.find("img").eq(index).stop(true,true).fadeIn()
					//.stop(true,true)方法将未执行完的动画队列清空，同时将正在执行的动画跳转带末状态
					.siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1");
};

/*超链接文字提示*/
$(function(){
	var x = 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>" + this.myTitle +"</div>";//创建div元素
		$("body").append(tooltip);
		$("#tooltip").css({
			"top":(e.pageY+y) + "px",
			"left":(e.pageX+x) + "px"
		}).show("fast");//设置x坐标和y坐标，并且显示
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();//移除
	}).mousemove(function(e){
		$("#tooltip").css({
			"top":(e.pageY+y) + "px",
			"left":(e.pageX+x) + "px"
		});
	});
});

/*品牌活动模块横向滚动*/
$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos")
			   .siblings().removeClass("chos");
		var idx = $("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;
	}).eq(0).click();
});
//显示不同模块
function showBrandList(index){
	var $rollbj = $("#jnBrandList");
	var rollWidth = $rollbj.find("li").outerWidth();
	rollWidth = rollWidth*4;//一个版面的宽度
	$rollbj.stop(true,false).animate({left:-rollWidth*index},1000);
}

/* 滑过图片出现放大镜效果 */
$(function(){
	$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	})
	$("#jnBrandList").delegate(".imageMask", "hover", function(){
		$(this).toggleClass("imageOver");
	});
})