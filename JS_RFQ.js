function randomQuote() {
arr = ["Welcome to the real world. It sucks. You’re gonna love it! - Monica",
       "How long do cats live? Like assuming you don’t throw ‘em under a bus or something? - Rachel",
       "Sure I peed on her. And if I had to, I’d pee on any one of you! - Joey",
       "He must decide. He must decide. Even though I made him up, he must decide! - Phoebe",
       "Here come the meat sweats… - Joey",
       "All right, kids, I gotta get to work. If I don’t input those numbers… it doesn’t make much of a difference. - Chandler",
       "Well, I’m sorry if I’m not a middle-aged black woman. And I’m also sorry if sometimes I go to the wrong audition. - Joey",
       "Come on Ross, you’re a paleontologist, dig a little deeper. - Phoebe",
       "THIS IS BRAND NEW INFORMATION! - Phoebe",
       "It’s a moo point. It’s like a cow’s opinion; it doesn’t matter. It’s moo. - Joey",
       "You could not be any more wrong. You could try, but you would not be successful. - Ross",
       "You’ve been BAMBOOZLED! - Joey",
       "Paper…snow…..a ghost!!! - Joey",
       "Why do you have to break up with her? Be a man. Just stop calling. - Joey",
       "Oh, are you setting Ross up with someone? Does she have a wedding dress? - Rachel",
       "I’m not so good with the advice. Can I interest you in a sarcastic comment? - Chandler",
       "I swear to god, Dad. That’s not how they measure pants! - Joey",
       "Raspberries? Good. Ladyfingers? Good. Beef? GOOD! - Joey",
       "Could I BE wearing any more clothes? - Joey",
       "JOEY DOESN’T SHARE FOOD. - Joey",
       "They’re still not coming on man! And the lotion and the powder have made a paste! - Ross",
       "Fine! Judge all you want but married a lesbian, left a man at the alter, fell in love with a gay ice dancer, threw a girl’s wooden leg in a fire, LIVE IN A BOX! - Monica",
       "pi-VOT! - Ross"];
var rand = Math.floor(Math.random()*arr.length);
var randQ = arr[rand];
document.getElementById("quote").innerHTML = randQ;

$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ randQ);
};

$(document).ready(function(){
$('#newQuote').click(function() {
    $("#tweet").removeClass("disabled");
});
});
