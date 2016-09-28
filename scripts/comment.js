/*搜索文本框效果*/
$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		//判断文本框是否为默认状态
		if ($(this).val() == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if ($(this).val() == "") {
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if (e.which == 13) {
			alert("回车提交表单！");
		}
	})
})

/*修改皮肤样式*/
$(function(){
	var $li = $("#skin li");
	$li.click(function(){
		switchSkin(this.id);
	});
	var cookie_skin = $.cookie("MyCssSkin");
	if (cookie_skin) {
		switchSkin(cookie_skin);
	}
});
function switchSkin(skinName){
	$("#" + skinName).addClass("selected")
					 .siblings().removeClass("selected");
	$("#cssfile").attr("href","styles/skin/" + skinName + ".css");//设置不同皮肤
	$.cookie("MyCssSkin",skinName,{path:'/',expires:10});

}

/*导航效果*/
$(function(){
	$("#nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});
})

/*热销效果*/
$(function(){
	$(".jnCatainfo .promoted").append("<s class='hot'></s>");
})