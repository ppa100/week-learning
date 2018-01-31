
$("aside a").click(function() {
	//Insert or remove the class in <li> tag');
	$(this).parent().toggleClass("open");
});

$(".goto1").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(".goto1").addClass("active");

	//Now, the section with the class section1 will recieve tha class active');
	$(".section1").addClass("active");
});

$(".goto2").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(".goto2").addClass("active");
	
	//Now, the section with the class section2 will recieve tha class active');
	$(".section2").addClass("active");
});

$(".goto3").click(function(){
	//It will remove all class active in tag a and section');
	$("section, a").removeClass("active");
	
	//Now will add class "active" in THIS link');
	$(".goto3").addClass("active");
	
	//Now, the section with the class section3 will recieve tha class active');
	$(".section3").addClass("active");
});

$(".box").click(function(){
	$("#box-container").addClass("show");
});

$(".closebutton, .box-background").click(function(){
	$("#box-container").removeClass("show");
});

// var getEmail = document.getElementById('emailinput');
// var result = document.getElementById('result');

var getage = document.getElementById('age');
var getname = document.getElementById('name');
var getcity = document.getElementById('city');
var getcountry = document.getElementById('country');
var getheight = document.getElementById('height');
var getweight = document.getElementById('weight');


$("#buttonform").click(function(){
	$("#age2").html(getage.value);
	console.log('The info is: '+getage.value);
	$("#name2").html(getname.value);
	console.log('The info is: '+getname.value);
	$("#city2").html(getcity.value);
	console.log('The info is: '+getcity.value);
	$("#country2").html(getcountry.value);
	console.log('The info is: '+getcountry.value);
	$("#height2").html(getheight.value);
	console.log('The info is: '+getheight.value);
	$("#weight2").html(getweight.value);
	console.log('The info is: '+getweight.value);
	$("#box-container").slideUp('slow');
});

var myweight = document.querySelector('[name=myweight]'),
myheight = document.querySelector('[name=myheight]');

function calcBmi() {
	var value_w = parseFloat(myweight.value);
	var value_h = parseFloat(myheight.value);
	var bmiResult;
	// console.log(value_w);
	// console.log(something);
	// console.log(something*something);
	
	bmiResult = value_w/(value_h*value_h);
	
	console.log(bmiResult);

	return bmiResult;
}