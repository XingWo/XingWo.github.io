function btn(num){
	$(".txt2").removeClass("txt2x");
	$("#txt"+num).addClass("txt2x")
}
$(document).ready(function(){
	$("#txt0").click(function(){
		 $(".content_right").html('<div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div><div class="che1"><div class="che"></div><p>这是产品名称</p></div>')
	 });
	 $("#txt1").click(function(){
	 	 $(".content_right").html('<div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div><div class="che2"><div class="che"></div><p>这是产品名称</p></div>')
	  });
	  $("#txt2").click(function(){
	  		 $(".content_right").html('<div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div><div class="che3"><div class="che"></div><p>这是产品名称</p></div>')
	  	 });
		 $("#txt3").click(function(){
		 	 $(".content_right").html('<div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div><div class="che4"><div class="che"></div><p>这是产品名称</p></div>')
		  });
		  $("#txt4").click(function(){
		  	 $(".content_right").html('<div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div><div class="che5"><div class="che"></div><p>这是产品名称</p></div>')
		   });
		   $("#txt5").click(function(){
		   	 $(".content_right").html('<div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div><div class="che6"><div class="che"></div><p>这是产品名称</p></div>')
		    });
});
function btna(num){
	nom=110+num*60;
	$(".huadongtiao").css("height",'60px');
	$(".huadongtiao").css("top",nom+'px');
}
function btans(num){
	$(".huadongtiao").css("height",'0px');
}