/********************************
INTERACTION NAVGATION AND CONTENT
********************************/
//wehen u click the class open is set 
$("aside a").click(function() {
	$(this).parent().toggleClass("open");
});

//when u click all classes are removed and a new one is seted in goto1 
$(".goto1").click(function(){
	$("section, a").removeClass("active");
	$(".goto1").addClass("active");
	$(".section1").addClass("active");
});

//when u click all classes are removed and a new one is seted in goto2 
$(".goto2").click(function(){
	$("section, a").removeClass("active");
	$(".goto2").addClass("active");
	$(".section2").addClass("active");
});

//when u click all classes are removed and a new one is seted in goto3
$(".goto3").click(function(){
	$("section, a").removeClass("active");
	$(".goto3").addClass("active");
	$(".section3").addClass("active");
});

// when u click in box the class show is added in id box-container
$(".box").click(function(){
	$("#box-container").addClass("show");
});

//when u click in class closebutton or box-baxckground the class show is removed
$(".closebutton, .box-background").click(function(){
	$("#box-container").removeClass("show");
});

/***********************************
insert the content of inputs in html
************************************/
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


//the function for the part is deffinied
function calcBmi() {
	// the variables for clacbmi are seted
	var value_w = parseFloat(myweight.value);
	var value_h = parseFloat(myheight.value);
	var bmiResult;

	//here the value in input height and weight are checked
	if (value_h < 1.50 || value_h > 2.30) {
		alert('please insert a height value between 1.50 and 2.30');
	} else if (value_w < 30 || value_w > 150) {
		alert('please insert a weight value between 30 and 150');
	} else {
		//the values in html are seted
		take_span_name.innerText = name2.value;
		take_span_age.innerText = age2.value;
		take_span_city.innerText = city2.value;
		take_span_country.innerText = country2.value;
		take_span_myheight.innerText = value_h;
		take_span_myweight.innerText = value_w;
		//the result is calculated
		bmiResult = value_w/(value_h*value_h);
		// remove the numbers after the dot && insert the value in html
		mybmi.innerHTML+=' '+Math.floor(bmiResult);
		// close the box
		$("#box-container").removeClass("show");
	}
	return true;
}