function btn(num){
	$(".content_right").hide();
	$(".txt2").removeClass("txt2x");
	$("#nr"+num).show();
	$("#txt"+num).addClass("txt2x");
}
function btna(num){
	nom=110+num*60;
	$(".huadongtiao").css("height",'60px');
	$(".huadongtiao").css("top",nom+'px');
	$(".huadongtiao").show();
}
function btans(num){
	$(".huadongtiao").css("height",'0px');
	$(".huadongtiao").css("top",'110px');
	$(".huadongtiao").hide();
}