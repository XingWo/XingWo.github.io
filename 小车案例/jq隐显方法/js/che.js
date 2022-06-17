function btn(num){
	$(".content_right").hide();
	$(".txt2").removeClass("txt2x");
	$("#nr"+num).show();
	$(".txt2").eq(num).addClass("txt2x");
}
function btna(num){
	nom=110+num*60;
	$(".huadongtiao").css("height",'60px');
	$(".huadongtiao").css("top",nom+'px');
}
function btans(num){
	$(".huadongtiao").css("height",'0px');
	$(".huadongtiao").css("top",'110px');
}