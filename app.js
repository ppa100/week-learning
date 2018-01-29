
$("aside a").click(function() {
	//Insert or remove the class in <li> tag');
	$(this).parent().toggleClass("open");
});


$("a").click(function(){
	$(this).removeClass(".section1")
});

$(".goto1").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(this).addClass("active");

	//Now, the section with the class section1 will recieve tha class active');
	$(".section1").addClass("active");
});

$(".goto2").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(this).addClass("active");
	
	//Now, the section with the class section2 will recieve tha class active');
	$(".section2").addClass("active");
});

$(".goto3").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(this).addClass("active");
	
	//Now, the section with the class section3 will recieve tha class active');
	$(".section3").addClass("active");
});

$(".1").click(function() {
	$("section, a").removeClass("active");
	$(".section1").addClass("active");

});

$(".2").click(function() {
	$("section, a").removeClass("active");
	$(".section2").addClass("active");

});

$(".3").click(function() {
	$("section, a").removeClass("active");
	$(".section3").addClass("active");

});