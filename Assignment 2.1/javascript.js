//created a function to coincide with askAway button. this code below utilizes an array that is used to pick from an assortment of responses. It picks using the randomIndex and then 
//prints on screen with the ballResponse.innerHTML
function askAway() 
{
 var responses = ["Yes Definitely", "Without a Doubt", "ABSOLUTELY", "Very Doubtful", "Not looking good", "No"]
 var randomIndex = Math.floor(Math.random() * responses.length);
 document.getElementById("ballResponse").innerHTML = responses[randomIndex];
}
//the resetButton is similar in funtionality to the askAway button. this function allows the user to "reshake" the 8ball
function resetButton() 
{
    var responses = ["Yes Definitely", "Without a Doubt", "ABSOLUTELY", "Very Doubtful", "Not looking good", "No"]
    var randomIndex = Math.floor(Math.random() * responses.length);
    document.getElementById("ballResponse").innerHTML = responses[randomIndex];
}

//the oracleQuestion is an additional function for the oracle button. again, it uses an array to select from a variety of responses
function oracleQuestion()
{
    var responses = ["Do not be afraid of competition.", "You will receive money from an unexpected source.", "Goodness is the only investment that never fails.", "Sell your ideas-they have exceptional merit.", "Get your mind set…confidence will lead you on.", "Respect yourself and others will respect you."]
    var randomIndex = Math.floor(Math.random() * responses.length);
    document.getElementById("oracleResponse").innerHTML = responses[randomIndex];    
}