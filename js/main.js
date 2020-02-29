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

	var json = [[['Darren Kim', 'Hannah Shever', 'Monica Zhang'], ['Claire Yoon', 'Jaemin Woo', 'Andrew Huang'], ['Nicholas Paul', 'Priscilla Chang', 'Edward Liu'], ['Justin Quan', 'Nicole Kim', 'Adam Sun']], [['Jackie Cai', 'Cathy Zhang', 'Alexandre Lavoie'], ['Bradly Wei', 'Vien Yen Ho Pham', 'Somi Kim', 'Charles Van'], ['Kate Ngo', 'Maryam Kazi', 'Dyllan Liu'], ['Erika Yang', 'Justin Kim', 'Conor Richard']], [['Dennis Pham', 'Ryan Fung', 'Hamayl Cheema'], ['Grace Chi', 'Milleno Pan', 'Ethan Chien'], ['Brenton Law', 'Chloe Guo', 'Jeremy Mui', 'Hitansh Nagdev'], ['Kai Chen', 'Autumn Wang', 'Alvin Han']], [['Henry Cheong', 'Carrie Liu', 'Andy Varela', 'Liam Patel'], ['Michelle Lin', 'Aman Patel', 'Amy Zhong'], ['Abby Tan', 'James Yoo', 'Albert Tran'], ['Emily Zhu', 'Max Kim', 'Jessica Wang', 'Emily Lu']], [['Alice Chen', 'Bianca Tam', 'Nikita Rahman'], ['Kaci Gu', 'Angela Jiang', 'Christine Liu'], ['Roger Zhang', 'Austin Kim', 'Coco Sun'], ['Sydney Ty', 'Cassidy Cho', 'Jason Tao']]];
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
