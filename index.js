$('.count').counterUp({
   delay: 10,
   time: 1000
});
$("#update-icon").on('click',function(event) {
	$("#update-icon").toggleClass('update-animation');
	setTimeout(function() {
		$("#updation").html('<i id="update-icon" class="fas fa-sync-alt"></i> Updated recently');
	},1000);	
});