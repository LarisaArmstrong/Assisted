/////// assisted ////////


// FUNCTION

function fortune(){


// Fortunes set unspecific
  
  allFortunes = [
    'Your home will be filled with peace and harmony.',
    'Everything will work out for the best.',
    'Stop procrastinating. Make a decision already.',
    'Tomorrow is another day.',
    "Your smile lights up someone else's day.",
    "Work with what you have.",
    'You excel at pleasing others.',
    'Respect your elders. You could inherit a large sum of money.'
  ]

  
  // Random Fortune Returns
  
  var randomString = Math.floor(Math.random()*allFortunes.length);
  var randomFortune = allFortunes[randomString];
  // console.log(randomFortune); FOR DEBUG
  
  // Fortune will appear if set otherwise will return else alert
  
  if(randomFortune){
   document.getElementById("crack").innerHTML = (randomFortune)
 } else {
   alert("You must be dead! Sorry.");
  }

}


