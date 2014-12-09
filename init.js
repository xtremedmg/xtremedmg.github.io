setTimeout(function(){
	magic_testing_shit = testing_bullshit()
	var item = document.getElementById("technique");
	item.textContent = '“' + magic_testing_shit + '”';
	
	var more = document.getElementById("more-info");
	more.removeAttribute("style");
	
	var tweet = document.getElementById("tweet");
	var technique_encoded = encodeURIComponent(magic_testing_shit + " — via @TestingBullshit");
	var url_encoded = encodeURIComponent('http://testingbullshit.com')
	var tweet_link = 'https://twitter.com/intent/tweet?text=' + technique_encoded + "&url=" + url_encoded;
	tweet.href = tweet_link
}, 2000);

