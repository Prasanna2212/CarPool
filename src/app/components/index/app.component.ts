/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Car Pool By U2LMIG';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "RaviK",
		car_name : "Jaguar",
		email : "ravi@yopmail.com",
		phone : 9503733178,
		pickup_point : "Mcity",
		drop_point : "vandalur",
		department : "RCLADM"
	},
	{
		id : 2,
		first_name : "Pollachi Thiru",
		car_name : "BMW",
		email : "Thiru@yopmail.com",
		phone : 8574889658,
		pickup_point : "Mcity",
		drop_point : "central",
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Surendar",
		car_name : "Lamboghini",
		email : "sura@yopmail.com",
		phone : 7485889658,
		pickup_point : "Mcity",
		drop_point : "tambaram",
		department : "Science"
	},
	{
		id : 4,
		first_name : "Gokul",
		car_name : "Honda",
		email : "gokul@yopmail.com",
		phone : 9685589748,
		pickup_point : "Mcity",
		drop_point : "merina",
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Prasanna",
		car_name : "Maruthi",
		email : "anna@yopmail.com",
		phone : 8595856547,
		pickup_point : "Mcity",
		drop_point : "aakam",
		department : "Rcladm"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
