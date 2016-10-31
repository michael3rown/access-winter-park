// Date picker calendars for 'Arrival' & 'Departure' fields in both 'Contact Us' & 'Property Inquiry' forms.
$(function() {
	$( "#arrival_date" ).datepicker({
		minDate: "0",
		beforeShowDay: function(date){ return [date.getDay() != 6, ""];}
	});
	$( "#departure_date" ).datepicker({
		minDate: "0",
		beforeShowDay: function(date){ return [date.getDay() != 6, ""];}
	});
	$( "#arrival_date_inquiry" ).datepicker({
		minDate: "0",
		beforeShowDay: function(date){ return [date.getDay() != 6, ""];}
	});
	$( "#departure_date_inquiry" ).datepicker({
		minDate: "0",
		beforeShowDay: function(date){ return [date.getDay() != 6, ""];}
	});
});

// Flash error for both 'Contact Us' & 'Property Inquiry' forms.
$(function(){ 
	if ($("label[for='name'] ~ p.red").length > 0 || $("label[for='email_address'] ~ p.red").length > 0 || $("label[for='phone_number'] ~ p.red").length > 0 || $("label[for='property'] ~ p.red").length > 0 || $("label[for='arrival_date'] ~ p.red").length > 0 || $("label[for='departure_date'] ~ p.red").length > 0 || $("label[for='message'] ~ p.red").length > 0 || $("label[for='recaptcha'] ~ p.red").length > 0) {
		
		$flash = $("<div/>", {"class" : "alert alert-danger"}).text("There was a problem with the information you submitted, please try again. Thank you.");
		$("body").prepend($flash);					
	}
})

// Append first level navigation that have children
$(function(){
	$(".navbar-nav > .has-children > a").append('<span class="fa fa-angle-down" aria-hidden="true" title="Open/Close"></span>');
});