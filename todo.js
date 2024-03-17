"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
	//disbale submit button
	document.querySelector("#sb").disabled=true;
	document.querySelector("#task").onkeyup =function (){
		if(document.querySelector("#task").value.length>0){
		document.querySelector("#sb").disabled=false;
		}else{
			document.querySelector("#sb").disabled=true;
		}
	};
	document.querySelector("form").onsubmit=function(){
		const task =document.querySelector("#task").value;
		const li =document.createElement("li");
	
		li.innerHTML = task;
		document.querySelector("#Tasks").append(li);
		document.querySelector("#task").value="";
		document.querySelector("#sb").disabled = true;
		//STOP FORM FROM SUBMITTING
		return false;
	}
	//styles
	//constainer and body styles
	let x = document.querySelector("#container");
	let y = document.querySelector("body");
	x.style.position = "absolute";
	x.style.left = "30%";
	x.style.top = "20%";
	x.style.transform = "translate(-50%, -50%)";

	//button styles
	let sbutton = document.querySelector("#sb");
	sbutton.addEventListener("mouseover", ()=>{
		sbutton.style.color = "white";
		sbutton.style.backgroundColor = "red";
	});
    sbutton.addEventListener("mouseout", ()=>{
		sbutton.style.color = "";
		sbutton.style.backgroundColor = "";
	});
	//font change transitions
	document.querySelector("select").onchange = function(){
		document.querySelector("ul").style.fontSize=this.value;
	}
    let dark = document.querySelector("#d");
	let light= document.querySelector("#l");
	dark.addEventListener("click", ()=>{
		y.style.color ="white";
		y.style.backgroundColor="black";
	});
	light.addEventListener("click", ()=>{
       y.style.color ="black";
	   y.style.backgroundColor="white";
	});
	dark.style.position = "absolute";
	dark.style.top ="10%";
	dark.style.left ="80%";

	light.style.position = "absolute";
	light.style.top ="10%";
	light.style.left ="83%";
	
	});
   







