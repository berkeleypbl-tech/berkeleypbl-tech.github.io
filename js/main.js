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

	var json = [[['Amy Zhong', 'Grace Chi', 'Riya Sheik', 'Armaan Tiwana'], ['Dennis Pham', 'Nikitha Sridhar', 'Kate Ngo', 'Susanna Huang'], ['Carrie Liu', 'Brandon Hong', 'Stephen Yang', 'Josie Nieh'], ['Cassidy Cho', 'Amy Yang', 'Coco Sun', 'Xiaojing (Ivy) Lei']], [['Christine Liu', 'Isabella Pang', 'Liam Patel'], ['Autumn Wang', 'Hayley Lai', 'Lilly Lim', 'Matthew Ahn'], ['Alvin Han', 'Julen Velasquez', 'Alyson Chang', 'Eddie Liu'], ['Somi Kim', 'Max Kim', 'Ashwin Iyer']], [['Kai Chen', 'Christie Lum', 'Alex Lavoie', 'Deepa Kori'], ['Andrew Huang', 'Jason Tao', 'Dylan Huynh', 'Eden Chun'], ['Charles Van', 'Gabe Deng', 'Ethan Chang', 'Adam An'], ['Hamayl Cheema', 'Justin Oh', 'Monica Zhang', 'Erika Yang']], [['Clairine Wantah', 'Monel Tse', 'Alexandra Koullick', 'Alice Han'], ['Bradly Wei', 'Ritvik Kandarkar', 'Elliot Yu', 'Varun Agrawal'], ['Cathy Zhang', 'Dyllan Liu', 'Jeremy Mui', 'Victoria Peng'], ['Hitansh Nagdev', 'Angela Jiang', 'Nathan Setokusumo', 'Priscilla Chang']]];
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
