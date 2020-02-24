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

	var json = [[['Alice Chen', 'Chloe Guo', 'Andy Varela', 'Monica Zhang'], ['Claire Yoon', 'Christine Liu', 'Coco Sun'], ['Brenton Law', 'Priscilla Chang', 'Vien Yen Ho Pham'], ['Justin Quan', 'Autumn Wang', 'Hannah Shever', 'Bianca Tam']], [['Austin Kim', 'Liam Patel', 'James Yoo'], ['Michelle Lin', 'Carrie Liu', 'Darren Kim'], ['Angela Jiang', 'Aman Patel', 'Dyllan Liu'], ['Henry Cheong', 'Erika Yang', 'Conor Richard']], [['Jackie Cai', 'Ethan Chien', 'Ryan Fung'], ['Grace Chi', 'Jessica Wang', 'Andrew Huang'], ['Nicholas Paul', 'Nikita Rahman', 'Jaemin Woo', 'Hitansh Nagdev'], ['Kai Chen', 'Adam Sun', 'Hamayl Cheema']], [['Kaci Gu', 'Cathy Zhang', 'Amy Zhong'], ['Roger Zhang', 'Alvin Han', 'Somi Kim'], ['Kate Ngo', 'Albert Tran', 'Charles Van'], ['Abby Tan', 'Justin Kim', 'Milleno Pan']], [['Dennis Pham', 'Emily Lu', 'Sydney Ty'], ['Bradly Wei', 'Maryam Kazi', 'Cassidy Cho', 'Max Kim'], ['Jeremy Mui', 'Alexandre Lavoie', 'Jason Tao'], ['Emily Zhu', 'Edward Liu', 'Nicole Kim']]];
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
