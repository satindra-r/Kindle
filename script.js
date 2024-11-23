const C00 = document.getElementById("C00");
const C01 = document.getElementById("C01");
const C02 = document.getElementById("C02");
const C03 = document.getElementById("C03");
const C10 = document.getElementById("C10");
const C11 = document.getElementById("C11");
const C12 = document.getElementById("C12");
const C13 = document.getElementById("C13");
const C20 = document.getElementById("C20");
const C21 = document.getElementById("C21");
const C22 = document.getElementById("C22");
const C23 = document.getElementById("C23");
const C30 = document.getElementById("C30");
const C31 = document.getElementById("C31");
const C32 = document.getElementById("C32");
const C33 = document.getElementById("C33");
const Checkboxes=[[C00,C01,C02,C03],[C10,C11,C12,C13],[C20,C21,C22,C23],[C30,C31,C32,C33]]

const Steps = document.getElementById("Steps");
const Reset = document.getElementById("Reset");
stepCount=0;

Checkboxes.forEach(function(Checkboxrow) {
	Checkboxrow.forEach(function(Check) {
		Check.addEventListener('change', function() {
			row=Number(this.id.substring(1,2));
			column=Number(this.id.substring(2,3));
			if(row>0){
				Checkboxes[row-1][column].checked-=1;
			}
			if(column<3){
				Checkboxes[row][column+1].checked-=1;
			}
			if(row<3){
				Checkboxes[row+1][column].checked-=1;
			}
			if(column>0){
				Checkboxes[row][column-1].checked-=1;
			}
			stepCount++;
			Steps.innerHTML="Steps:"+stepCount;
			win=1;
			Checkboxes.forEach(function(Checkboxrow) {
				Checkboxrow.forEach(function(Check) {
					win&&=Check.checked;
				});
			});
			if(win){
				setTimeout(function() {
					alert("You won in "+stepCount+" steps, Try again?");
					Reset.click();
				}, 10);
			}
		});
	});
});

Reset.addEventListener('click', function() {
	Checkboxes.forEach(function(Checkboxrow) {
		Checkboxrow.forEach(function(Check) {
			Check.checked=0;
		});
	});
	stepCount=0;
	Steps.innerHTML="Steps:"+stepCount;
});