// JavaScript Document

/*弹出窗口js*/	
function openwindall(val){
	if(val=="1"){
		$('#myModal1').modal('show')
	}
	if(val=="2"){
		$('#myModal2').modal('show')
	}
	if(val=="3"){
		$('#myModal3').modal('show')
	}
	if(val=="4"){
		$('#myModal4').modal('show')
	}
}
function closswindall(val){
	if(val=="1"){
		$('#myModal1').modal('hide')
	}
	if(val=="2"){
		$('#myModal2').modal('hide')
	}
	if(val=="3"){
		$('#myModal3').modal('hide')
	}
	if(val=="4"){
		$('#myModal4').modal('hide')
	}
}

/*跳转页面*/
function gotoplay(obj){
	var myurl=obj;
	window.location.href=obj;
}

/*下拉框联通*/
function gototab(obj){
	var name=$(obj).val();
	$("#hidebox ul").hide();
	$("#imgbox"+name).show();
}

/*移除父级*/
function remtr(obj){
	$(obj).parent().parent().remove();
}

/*定制组件*/
var linum=0;
/*主菜单选中*/
function checkmenuthis(obj){
	$("#imgbox").removeClass("back");
	/*1.获取title / alt */
	var mytitleadd=$(obj).attr("title");
	var myidadd=$(obj).attr("alt");	
	/*2.找到左侧菜单中的复选框打勾*/
	$("#mycheck"+$(obj).attr('alt')).prop("checked","checked")
	/*3.生成任务*/
	$("#userselect").append("<li id="+myidadd+"><img src='img/assemblyimg/sdt-1.png' width='60' height='30'/>"+mytitleadd+"<a href='#' onclick='closeme(this)'>X</a><a href='#'>↑</a></li>")
		/*计数器加1*/
		linum+=1;
		$("#limun").text(linum);
	/*4.生成保存按钮*/
	if($("#userselect li").size()>0){
		$("#dz").css("display","block")	
	}else{
		$("#dz").hide(200)	
	}
}

/*复选框选中*/
function checkthis(obj,num){
	if($(obj).prop("checked")==true){
		/* 大列表复选框
		var me=$(obj).attr("alt");
		if(me==1){
			$("#mycheck1").prop("checked","checked")
			$("#mycheck11").prop("checked","checked")
		}
		*/
		var mytitleadd=$(obj).attr("title");
		var myidadd=$(obj).attr("alt");	
			linum+=1;
			$("#limun").text(linum);
		$("#userselect").append("<li id="+myidadd+"><img src='img/assemblyimg/sdt-1.png' width='60' height='30'/>"+mytitleadd+"<a href='#' onclick='closeme(this)'>X</a><a href='#'>↑</a></li>")
	}
	if($(obj).prop("checked")==false){
		
		/* 大列表复选框
		var me=$(obj).attr("alt");
		if(me==1){
			$("#mycheck1").prop("checked","")
			$("#mycheck11").prop("checked","")
		}
		*/
		$("#"+myiddel).remove();
	}	
}

/*进入详情*/
function checkimg(num){
	$("#myimg"+num).show(500);
	/*隐藏选择菜单*/
	$("#myshow1,#myshow2,#myshow3,#myshow4").hide();
	/*清空右侧菜单*/	
}

/*购物车中有内容时退出*/
function checkimggo(num){
	$("#imgbox").removeClass("back");
	if($("#userselect li").size()>0){
		if(confirm('展示列表中有为保存的数据，确定退出吗？')==true){
			$("#userselect li").remove();	
			$("#selectul input").prop("checked","");
			$("#myimg1,#myimg2,#myimg3,#myimg4,#myimg5").hide();
			$("#dz").hide();
			myshow(num);
		}else{
			return;
		}
	}else{
		myshow(num);
	}
}

/*清空列表*/
function empty(){
	if(confirm('确定清空吗？')){
	/*清空左侧菜单中的打勾*/
	$("#selectul input").prop("checked","");
	$("#userselect li").remove();
	$("#myimg1,#myimg2,#myimg3,#myimg4,#myimg5").hide();
	$("#dz").hide();
	/*计数器还原*/
		linum=0;
		$("#limun").text(linum);
	myshow(1);
	}
}

function closeme(obj){
	/*移除本身*/
	$(obj).parent().remove();
	/*计数器减1*/
		linum-=1;
		$("#limun").text(linum);
	/*去掉左侧菜单中的对勾*/
	var myid=$(obj).parent().attr("id");
	$("#mycheck"+myid).prop("checked",false)
	$("#myimg"+$(obj).parent().attr("id")).hide();
	/*隐藏按钮*/
	if($("#userselect li").size()>0){
		$("#dz").show(200)	
	}else{
		$("#dz").hide(200)	
		/*一个都没有的时候返回主菜单*/
		myshow(1);
	}
}

/*返回主菜单*/
function myshow(num){
	$("#myhidebox").hide();
	$("#myshow1,#myshow2,#myshow3,#myshow4").hide();
	$("#myimg1,#myimg2,#myimg3,#myimg4,#myimg5").hide();
	$("#myshow"+num).show();	
}
function myhide(){
	$("#myhidebox").show()	
	$("#myshow1,#myshow2,#myshow3,#myshow4").hide();
	$("#myimg1,#myimg2,#myimg3,#myimg4,#myimg5").hide();
}

/*伸缩菜单*/

function hidefixedmenu(){
	if(parseInt($("#fixedmenu").css("width"))>1){
		$("#fixedmenu").css("width","0")
	}else{
		$("#fixedmenu").css("width","auto")
	}
}

/*菜单弹出*/
function showolbox(obj){
	$(obj).siblings(".dataLeftmenuol_box").show()
}
function hideolbox(obj){
	$(obj).siblings(".dataLeftmenuol_box").hide()	
}
function showolbox2(obj){
	$(obj).show()
}
function hideolbox2(obj){
	$(obj).hide()	
}

/*下一级滚动*/
function scrolldiv(){
	$("#wai").animate({left:"-1200px"})	
	$("#nei").animate({right:"0"})	
	$("#neibtn").show(200);
	
	var height=$("#nei .bcjs").size();
	$("#heightbox").css("height",height*200);
	
}
function scrolldivout(){
	$("#wai").animate({left:"0"})	
	$("#nei").animate({right:"-1200px"})
	$("#neibtn").hide(200);	
	
	$("#heightbox").css("height","760");
}


/*大数据分析开放系统左侧菜单*/
function openandcloss(obj){
	$('#shoucang,#baogao,#dzbg,#moban,#scsj,#scsj2,#scsj3,#moren,#grzl,#zhaq').hide();
	$("#"+obj).show()
}

//创建表单 选项卡
function yogurt_tab(value){
	for(i=1;i<=6;i++){
	  $("#yogurt_tab"+i).css("display","none");
	  $("#yogurt_tab_button"+i).removeClass("yogurt_tab_ahover");
	}
	if(value==1){
		$("#yogurt_tab1").fadeIn(300);
		$("#yogurt_tab_button1").addClass("yogurt_tab_ahover");
		}
	if(value==2){
		$("#yogurt_tab2").fadeIn(300);
		$("#yogurt_tab_button2").addClass("yogurt_tab_ahover");
		}
	if(value==3){
		$("#yogurt_tab3").fadeIn(300);
		$("#yogurt_tab_button3").addClass("yogurt_tab_ahover");
		}	
	if(value==4){
		$("#yogurt_tab4").fadeIn(300);
		$("#yogurt_tab_button4").addClass("yogurt_tab_ahover");
		}	
	if(value==5){
		$("#yogurt_tab5").fadeIn(300);
		$("#yogurt_tab_button5").addClass("yogurt_tab_ahover");
		}
	if(value==6){
		$("#yogurt_tab6").fadeIn(300);
		$("#yogurt_tab_button6").addClass("yogurt_tab_ahover");
		}	
}