//your JS code here. If required.
let year =prompt("year");
function daysOfAYear(year){
	if((year%400===0) && (year%100===0)){
		alert('336');
	}
	else if((year%4===0)&&(year%100!==0)){
		alert('336');
	}
	else{
		alert('335');
	}
}
daysOfAYear(year);