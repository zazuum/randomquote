$(document).ready(function() {

    	var myjson;
    $.getJSON("json/quotes.json", function(json) {
	myjson = json;
	var number = Math.floor(Math.random() * (myjson.length - 0 + 1)) + 0;

    $(".message").html(JSON.stringify(myjson[number].quoteText)+" <br>"+myjson[number].author);

      });


    $("#getMessage").on("click", function(){
      var number = Math.floor(Math.random() * (myjson.length - 0 + 1)) + 0;


      $(".message").html(JSON.stringify(myjson[number].quoteText)+" <br>"+myjson[number].author);



	$(".well").animate({ opacity: '0'}, "slow").animate({opacity: '1'}, "slow");

    });

    $("#shareTwitter").on("click", function() {
		 window.open('http://twitter.com/intent/tweet?text='
	+ $(".message").text() );
		})

    $("#shareFacebook").on("click", function() {
		 window.open('https://www.facebook.com/sharer/sharer.php?u=https://zazuum.github.io/randomquotetitle='
		+ $(".message").text() +"\"" );
		})

   $("#shareWhatsApp").on("click", function() {
		 window.open('whatsapp://send?text='
	+ $(".message").text() );
		})


  });



