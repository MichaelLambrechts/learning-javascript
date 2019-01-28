
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
  */

  console.log("Hey look in your browser console. It works!");

  function GetAge(year, month, day)
  {
  	var now = new Date();
  	var age = now.getFullYear() - year;
	var mdif = now.getMonth() - month + 1; //0=jan	
	
	if(mdif < 0)
	{
		--age;
	}
	else if(mdif == 0)
	{
		var ddif = now.getDate() - day;
		
		if(ddif < 0)
		{
			--age;
		}
	}

	return age;
}


function getValue(){

	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	let age = GetAge(year, month, day);
	if (age > 0 && age < 110){
		document.querySelector("#result").innerHTML = "Age = " +age;
	}
	else{
		document.querySelector("#result").innerHTML = "Age = ";
	}
}
setInterval(getValue, 1000);