$("#update-icon").on('click',function(event){var randomnum=Math.floor(Math.random()*5)+1;$("#update-icon").toggleClass('update-animation');setTimeout(function(){$("#updation").html(`<i id="update-icon" class="fas fa-sync-alt"></i> Updated ${randomnum} hours ago`)},1000)});$(".mob-trend-btn").on('click',function(event){$(".trend-showhide-div").slideToggle();var value=$(".mob-trend-btn").text();if(value==="More ↓"){$(".mob-trend-btn").text("Less ↑")}
else{$(".mob-trend-btn").text("More ↓")}});$(".mob-prod-btn").on('click',function(event){$(".prod-showhide-div").slideToggle();var value=$(".mob-prod-btn").text();if(value==="More ↓"){$(".mob-prod-btn").text("Less ↑")}
else{$(".mob-prod-btn").text("More ↓")}});$(".closing-icon").on('click',function(event){$(".chat-display-div").removeClass('showHide')});$("#chat-start-icon-div").on('click',function(event){$(".chat-display-div").css('background-color','#45D0C3');$(".red-alert-section").fadeOut();$(".unwell-alert-section").fadeOut();$(".good-alert-section").fadeOut();$(".condition-one").fadeOut('fast');$(".chat-display-div").addClass('showHide');$(".chat-notification").show('slow',function(){$(".chat-notification").text('Your assessment will start soon...');$(".condition-one").fadeOut('400')});var userscore=0;var currentSymtom=0;setTimeout(function(){$(".chat-notification").fadeOut('400');$(".chat-display-div").css('background-color','#45D0C3');$(".condition-one").fadeIn('400');$("#chat1-opt1").on('click',function(event){$(".condition-one").fadeOut('400');$(".condition-two").fadeIn('400');currentSymtom++});$("#chat1-opt2").on('click',function(event){$(".condition-one").fadeOut('400');$(".condition-two").fadeIn('400');currentSymtom++});$("#chat1-opt3").on('click',function(event){$(".condition-one").fadeOut('400');$(".condition-two").fadeIn('400');currentSymtom++});$("#chat1-opt4").on('click',function(event){$(".condition-one").fadeOut('400');$(".condition-two").fadeIn('400');userscore++});$("#chat2-opt1").on('click',function(event){$(".condition-two").fadeOut('400');$(".condition-three").fadeIn('400')});$("#chat2-opt2").on('click',function(event){$(".condition-two").fadeOut('400');$(".condition-three").fadeIn('400')});$("#chat2-opt3").on('click',function(event){$(".condition-two").fadeOut('400');$(".condition-three").fadeIn('400')});$("#chat2-opt4").on('click',function(event){$(".condition-two").fadeOut('400');$(".condition-three").fadeIn('400');userscore++});$("#chat3-opt1").on('click',function(event){$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#fe346e');$(".red-alert-section").fadeIn('400')});$("#chat3-opt2").on('click',function(event){$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#fe346e');$(".red-alert-section").fadeIn('400')});$("#chat3-opt3").on('click',function(event){$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#fe346e');$(".red-alert-section").fadeIn('400')});$("#chat3-opt4").on('click',function(event){if(userscore==2){$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#4ecf79');$(".good-alert-section").fadeIn('400');userscore=0}
else if(currentSymtom==0){$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#4ecf79');$(".good-alert-section").fadeIn('400');currentSymtom=0}
else{$(".condition-three").fadeOut('400');$(".chat-display-div").css('background-color','#fb7b6b');$(".unwell-alert-section").fadeIn('400')}})},2000)});$.ajax({url:'https://api.covid19api.com/summary',type:'GET',dataType:'JSON',success:function(data){console.log(data);$("#total-global-confirmed").text(data.Global.TotalConfirmed);console.log(data.Global.TotalConfirmed);$("#total-global-deaths").text(data.Global.TotalDeaths);console.log(data.Global.TotalDeaths);$("#total-global-recovered").text(data.Global.TotalRecovered);console.log(data.Global.TotalRecovered);$("#total-india-confirmed").text(data.Countries[101].TotalConfirmed);console.log(data.Countries[101].TotalConfirmed);$("#total-india-deaths").text(data.Countries[101].TotalDeaths);console.log(data.Countries[101].TotalDeaths);$("#total-india-recovered").text(data.Countries[101].TotalRecovered);console.log(data.Countries[101].TotalRecovered)}});$(".faq-answer-container").hide();$(".faq-btn").on('click',function(event){$("i",this).toggleClass("fa-plus-square fa-minus-square")});$(".q1").on('click',function(event){$(".a1").slideToggle(400)});$(".q2").on('click',function(event){$(".a2").slideToggle(400)});$(".q3").on('click',function(event){$(".a3").slideToggle(400)});$(".q4").on('click',function(event){$(".a4").slideToggle(400)});$(".q5").on('click',function(event){$(".a5").slideToggle(400)});$(".q6").on('click',function(event){$(".a6").slideToggle(400)});$(".q7").on('click',function(event){$(".a7").slideToggle(400)});$(".q8").on('click',function(event){$(".a8").slideToggle(400)});$(".q9").on('click',function(event){$(".a9").slideToggle(400)});$(".q10").on('click',function(event){$(".a10").slideToggle(400)});$(".q11").on('click',function(event){$(".a11").slideToggle(400)});$(".q12").on('click',function(event){$(".a12").slideToggle(400)});$(".q13").on('click',function(event){$(".a13").slideToggle(400)});$(".q14").on('click',function(event){$(".a14").slideToggle(400)});$(".q15").on('click',function(event){$(".a15").slideToggle(400)});$(".q16").on('click',function(event){$(".a16").slideToggle(400)});$(".q17").on('click',function(event){$(".a17").slideToggle(400)});$(".q18").on('click',function(event){$(".a18").slideToggle(400)});$(".q19").on('click',function(event){$(".a19").slideToggle(400)});$(".q20").on('click',function(event){$(".a20").slideToggle(400)});$(".faq-less-btn").hide();$(".faq-more-btn").on('click',function(event){var value=$(".faq-more-btn").text();if(value==="15 More ▼"){$(".first-faq-section").slideDown();$(".faq-more-btn").text("10 More ▼");$(".faq-less-btn").fadeIn()}
else if(value==="10 More ▼"){$(".second-faq-section").slideDown();$(".faq-more-btn").text("5 More ▼")}
else if(value==="5 More ▼"){$(".third-faq-section").slideDown();$(".faq-more-btn").text("No More")}});$(".faq-less-btn").on('click',function(event){var value=$(".faq-more-btn").text();if(value==="10 More ▼"){$(".first-faq-section").slideUp();$(".faq-more-btn").text("15 More ▼");$(".faq-less-btn").fadeOut()}
else if(value==="5 More ▼"){$(".second-faq-section").slideUp();$(".faq-more-btn").text("10 More ▼")}
else if(value==="No More"){$(".third-faq-section").slideUp();$(".faq-more-btn").text("5 More ▼")}})
