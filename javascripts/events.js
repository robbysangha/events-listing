$( document ).ready(function() {
	
	var maxEvents = 5;

	var MONTHS = ["January", "February", "March", "April", "May", "June", 
								"July", "August", "September", "October", "November", 
								"December"];

	// All the events with their details, order is not important.
	var e1 = new Date("December 3, 2013");
	var e1Title = "Bilateral Wingmanning";
	var e1Description = "9pm - 12am at The Foxes Den" + "<br>" + 
	"Come out and wingman your best friend bilaterally, medieval style.";

	var e2 = new Date("December 6, 2013");
	var e2Title = "Heights of Tomorrow";
	var e2Description = "2pm - 4pm at Carr Hall" + "<br>" + 
	"Discussion on the relationship of medieval culture to the present and ultimately to the future.";

	var e3 = new Date("December 14, 2013");
	var e3Title = "Latin Dissertation";
	var e3Description = "11am - 2pm at MSUS Office(Brennan Hall)" + "<br>" + 
	"Discussion on the medieval uses of Latin. Come out and learn some medieval slang.";

	var e4 = new Date("December 22, 2013");
	var e4Title = "Annual Masquerade";
	var e4Description = "4pm - 7pm at PIMS" + "<br>" + 
	"A ball does'nt get more medieval than this. There will be a feast with 3 courses of genuine medieval cuisine.";

	var e5 = new Date("December 31, 2013");
	var e5Title = "Scripture Reading";
	var e5Description = "12pm - 2pm at Father Madden Hall(in Carr Hall)" + "<br>" + 
	"Discussion of the many interpretations of a segment of the Holy Bible in Latin.";
	
	var e6 = new Date("January 6, 2014");
	var e6Title = "Architectural Excursion";
	var e6Description = "10am - 1pm at Brennan Hall" + "<br>" + 
	"We have a list of buildings in Toronto that are inspired by medieval architecture. Come out and check them out with us.";

	var e7 = new Date("January 18, 2014");
	var e7Title = "Medieval Carnival";
	var e7Description = "10am - 1pm at SMC Quad" + "<br>" + 
	"Like dressing up in armors? Come out to SMC quad for fun rides, celtic music and simulated sword fights.";

	var e8 = new Date("February 10, 2014");
	var e8Title = "Medieval Banners";
	var e8Description = "11am - 1pm at SMC Quad" + "<br>" + 
	"Make your own kingdom's flag, cloth and sewing machines will be provided.";

	var e9 = new Date("April 14, 2014");
	var e9Title = "Medieval Trivia";
	var e9Description = "12pm - 2pm at The Coop(in Brennan Hall)" + "<br>" + 
	"Think you know Medievalism well? Put your knowledge to the test!";

	var e10 = new Date("April 10, 2014");
	var e10Title = "Bruno Perrier Seminar";
	var e10Description = "11am - 2pm at Father Madden Hall(in Carr Hall)" + "<br>" + 
	"Bruno Perrier, the renowned Medieval furniture expert will be giving a seminar on Scottish King's furniture.";
	
	var eventsList = [[e1, e1Title, e1Description], 
		[e2, e2Title, e2Description], [e3, e3Title, e3Description], 
		[e4, e4Title, e4Description], [e5, e5Title, e5Description], 
		[e6, e6Title, e6Description], [e7, e7Title, e7Description], 
		[e8, e8Title, e8Description], [e9, e9Title, e9Description], 
		[e10, e10Title, e10Description]];

	// Sorting the eventsList, using a form of insertion sort.
	for (var i = 0; i < eventsList.length; i++) {
		var replacement = eventsList[i];
		var comparison = eventsList[i][0].valueOf();
		var j = i;
		while ((j > 0) && (eventsList[j - 1][0].valueOf() > comparison)) {
			eventsList[j] = eventsList[j - 1];
			j--;
		}
		eventsList[j] = replacement;

		// This is for thee next if statement.
		var lastIndex = i;
	}

	var today = new Date();
	today.setHours(00);
	today.setMinutes(00);
	today.setSeconds(00);
	today.setMilliseconds(000);

	// Empties the list if there are no current events.
	if (today > eventsList[lastIndex][0]) {
		eventsList = [];
	}
	// Breaks the list according to the most current event.
	for (var i = 0; i < eventsList.length; i++) {
		if (today <= eventsList[i][0]) {
			eventsList = eventsList.slice(i);
			break;
		}
	}

	// Making a counter that is 5 or less depending on how many relevant events 
	// are in the list.
	var counter = 0;
	if (eventsList.length < maxEvents) {
		counter = eventsList.length;
	} else {
		counter = maxEvents;
	}

	var events = "";
	// Generates html code for at most 5 relevant events.
	for (var i = 0; i < counter; i++) {
			events += "<h2>" + MONTHS[eventsList[i][0].getMonth()] + " " + 
			eventsList[i][0].getDate() + "  -  " + eventsList[i][1] + "</h2><p>" + 
			eventsList[i][2] + "</p>";
	}
	if (counter == 0) {
		events += "<h2 style='text-align:center'>Coming Soon</h2>";
	}

	$("#events-box").append(events);
});