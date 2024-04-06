//your JS code here. If required.
let year =prompt("year");
function daysOfAYear(year){
	if((year%400===0) && (year%100===0)){
		alert(366);
	}
	else if((year%4===0)&&(year%100!==0)){
		alert(366);
	}
	else{
		alert(365);
	}
}
daysOfAYear(year);