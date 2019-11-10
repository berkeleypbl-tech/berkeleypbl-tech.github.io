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

	var json = [[['Nicholas Paul', 'George Lee', 'Hannah Shever'], ['Kai Chen', 'Jenny Bong', 'Junru Lyu'], ['Jacqueline Zhang', 'Ethan Yoon', 'Erika Yang'], ['Henry Cheong', 'Angela Jiang', 'Sydney Ty']], [['Emily Jin', 'David Wang', 'Monica Zhang', 'Celine Birkl'], ['Corey Gibbel', 'Christine Liu', 'Janet Xu', 'Kristy Kao'], ['Alan Dai', 'Priscilla Chang', 'Kate Ngo', 'Amy Zhong'], ['Claire Yoon', 'Dennis Pham', 'Tarun Sreedhar', 'Emily Zhu']], [['Tiffany Chung', 'Kaci Gu', 'Max Larsen'], ['Carrington Park', 'Roger Zhang', 'Hitansh Nagdev', 'Jackie Hu'], ['Sehee Park', 'Dylan Asprer', 'Samantha Fang', 'Cyssi Ngo'], ['Alice Chen', 'Grace Li', 'Vaibhav Gattani']], [['Anthony Chen', 'Patricia Tse', 'Stella Kim'], ['Brenton Law', 'Vien Yen Ho Pham', 'Bradley Wei'], ['Jeremy Mui', 'Nina Tagliabue', 'Khoa Pham'], ['Grace Chi', 'Sarah Shin', 'Margaret Lee']], [['Carl Qi', 'Chloe Guo', 'Autumn Wang'], ['Darren Kim', 'Justin Quan', 'Cathy Zhang'], ['Michelle Lin', 'Tiffany Feng', 'Conor Richard'], ['Charles Van', 'Christine Oh', 'Brandy Nguyen']]];
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

	var hrefs = [$('.input_button').attr('href'), 'https://docs.google.com/forms/d/e/1FAIpQLSfpjEQZYNVwTj3U3LycqvpxaQKfOiuZ9NTwL7V1LxkXksCqCA/viewform?usp=sf_link'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://docs.google.com/forms/d/e/1FAIpQLSccfnH-oIyn13sSLN5yLBAzdwmPcb-ge5IBNIwMV4754-u1sQ/viewform'];
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
