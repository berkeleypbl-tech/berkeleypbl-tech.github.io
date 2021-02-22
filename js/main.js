(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					["fri10", "fri11", "fri12", "fri1"], // Comment out this line to remove Fridays
					];

	// list of days, then time slots per day, then people per time slot

	var json = [[['Autumn Wang', 'Amy Yang', 'Armaan Tiwana', 'Amy Zhong'], ['Cathy Zhang', 'Dylan Huynh', 'Deepa Kori', 'Dennis Pham'], ['Alvin Han', 'Matthew Ahn', 'Dyllan Liu', 'Kate Ngo'], ['Somi Kim', 'Jason Tao', 'Coco Sun', 'Angela Jiang']], [['Carrie Liu', 'Alice Han', 'Andrew Huang', 'Christine Liu'], ['Bradly Wei', 'Stephen Yang', 'Xiaojing (Ivy) Lei'], ['Eddie Liu', 'Josie Nieh', 'Ethan Chang', 'Alexandra Koullick'], ['Monica Zhang', 'Ashwin Iyer', 'Jennifer Lopez Garcia', 'Hitansh Nagdev']], [['Alex Lavoie', 'Lilly Lim', 'Julen Velasquez', 'Susanna Huang'], ['Eden Chun', 'Riya Sheik', 'Ritvik Kandarkar', 'Cassidy Cho'], ['Charles Van', 'Brandon Hong', 'Liam Patel', 'Isabella Pang'], ['Hamayl Cheema', 'Justin Oh', 'Adam An', 'Alyson Chang']], [['Clairine Wantah', 'Monel Tse', 'Gabe Deng', 'Grace Chi'], ['Kai Chen', 'Victoria Peng', 'Hayley Lai', 'Varun Agrawal'], ['Jeremy Mui', 'Christie Lum', 'Nikitha Sridhar', 'Elliot Yu'], ['Max Kim', 'Nathan Setokusumo', 'Erika Yang', 'Priscilla Chang']]];
		$.each(json, function(i) { // loops through each day
		$.each(this, function(j) { // loops through each time slot in each day
			var slot = slots[i][j];
			var slotclass = "ul" + slot;
			var slotobject = $("td." + slot);
			var temp = $("<ul/>").addClass(slotclass).appendTo(slotobject);
			var ul = $("ul." + slotclass);
			$.each(this, function() { // loops through each person in each time slot
				var li = $("<li/>").appendTo(ul);
	    		var a = $("<a/>").text(this).appendTo(li);
			});
		});
	});

	var hrefs = [$('.input_button').attr('href'), 'https://docs.google.com/forms/d/e/1FAIpQLScfsoHk29eNSlKUCk-koM-eFFeQy0npxTQA_EBxRcidOT5rLQ/viewform'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://docs.google.com/forms/d/e/1FAIpQLSe881a8edKTs1_4AaWM8SiZIVoRPth8ZmA4n8Ps-VhHR95YtQ/viewform'];
	$(window).on('resize', function() {
		$('.swap_button').attr('href', function() {
			return hrefxs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	// ~~~~~~~~~~~~~~~~~~~~~~~~~ Hover Animation ~~~~~~~~~~~~~~~~~~~~~~~~//
	"use strict";
	$('.column100').on('mouseover',function(){
		// this grabs the table to find the appropriate style to use
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + "";

			$(table2).find("."+column).addClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
		}
	});

	$('.column100').on('mouseout',function(){
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + "";

			$(table2).find("."+column).removeClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
		}
	});


})(jQuery);
