(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					];

	// list of days, then time slots per day, then people per time slot

	var json = [[["Lorenzo Dela Cruz", "Amit Pampati", "Keilyn Yuzuki"], ["Ankur Singh", "Rishi Modi", "Eric Wang"], ["Yusuf Yamani", "Julia Lu", "Jackie Hu"], ["Jacqueline Zhang", "Ryan Chiem"]], [["Anthony Chen", "Max Larsen", "Bryan Huang"], ["Ciecie Chen", "Gurshaan Bariana", "Junru Lyu"], ["Max Wang", "Alex Park AP", "Vincent Tantra"], ["Taylor Wang", "Alan Dai", "Chris Ding"]], [["Hermes Ip", "Carl Qi", "Alice Chen"], ["Caroline Chen", "Raina Yang", "Abby Tan"], ["William Jiang", "Claire Yoon", "Darren Kim"], ["Alex Park", "Eunice Cheung", "Kristina Lee"]], [["Corey Gibbel", "Mia Karimabadi", "Zen Thunparkkul"], ["Chloe Lin", "Tiffany Vo", "Matthew Huang"], ["Austin Kim", "Nancy Chen", "Jacqueline Cai"], ["Timothy Huang", "Jiyi Jung", "Simran Regmi"]]];
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

	var hrefs = [$('.input_button').attr('href'), 'https://goo.gl/forms/XYqYQY3BmUsDlzHE3'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://goo.gl/forms/WpOHMm5Ls3tIeEOM2'];
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
