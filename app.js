
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


var name2 = document.querySelector("[name=name2]");
var age2 = document.querySelector("[name=age2]");
var city2 = document.querySelector("[name=city2]");
var country2 = document.querySelector("[name=country2]");
var myweight = document.querySelector('[name=myweight]');
var myheight = document.querySelector('[name=myheight]');
var mybmi = document.querySelectorAll('p')[0];
var mycity = document.querySelectorAll("span")[1];


var my_resultList = document.querySelectorAll('ul.result-bmi')[0];
var resultList_ALL_li = my_resultList.children;


var take_span_name = resultList_ALL_li[0].children[1];
var take_span_age = resultList_ALL_li[1].children[1];
var take_span_city = resultList_ALL_li[2].children[1];
var take_span_country = resultList_ALL_li[3].children[1];
var take_span_myheight = resultList_ALL_li[4].children[1];
var take_span_myweight = resultList_ALL_li[5].children[1];

console.log('What is my name?');
console.log(take_span_name.innerText);

var test = 26.122448979591837;


function calcBmi() {
	var value_w = parseFloat(myweight.value);
	var value_h = parseFloat(myheight.value);
	var bmiResult;

	if (value_h < 1.50 || value_h > 2.30) {
		alert('please insert a height value between 1.50 and 2.30');
	} else if (value_w < 30 || value_w > 150) {
		alert('please insert a weight value between 30 and 150');
	} else {
		take_span_name.innerText = name2.value;
		take_span_age.innerText = age2.value;
		take_span_city.innerText = city2.value;
		take_span_country.innerText = country2.value;
		take_span_myheight.innerText = value_h;
		take_span_myweight.innerText = value_w;

		bmiResult = value_w/(value_h*value_h);

		mybmi.innerHTML+=' '+Math.floor(bmiResult);
		$("#box-container").removeClass("show");
	}

	return true;
}