//your JS code here. If required.
var year =prompt("year");
let daysOfAYear(year){
	if(year%400===0)&&(year%100===0){
		console.log(366);
	}
	else if(year%4===0)&&(year%100!==0){
		console.log(366);
	}
	else{
		console.log(365);
	}
}
daysOfAYear(year);