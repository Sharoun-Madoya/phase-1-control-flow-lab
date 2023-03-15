function scuberGreetingForFeet(someValue){
  let result;
  if ( someValue <= 400 ) {
    result = "This one is on me!";
  }
  else if ( someValue > 2000 && someValue < 2500 ) {
    result = "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500 ){
    result = "No can do.";
  }
  return result
  // Write your code here!
}

function ternaryCheckCity(name){
  return name === 'NYC'? 'Ok, sounds good.': 'No go.'
  }
  // Write your code here!

function switchOnCharmFromTip(answer){
  switch(answer){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
      return 'Thank you.'
      default:
      return 'Bye.'
  }
  // Write your code here!
}