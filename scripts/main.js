/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue (hand) {
  var total = 0;
  for(let i=0;i<hand.length;i++)
  {
    if(hand[i] == "K" || hand[i] == "Q" || hand[i] == "J"  ){
        total +=10;
    }
    else if(hand[i] > 0  &&  hand[i] < 11){
      total +=parseInt(hand[i]);
    }
  }
  total = fnAce(total, hand);
  return total;
}

function fnAce(itotal, ihand)
{
  for(let j=0;j<ihand.length;j++)
  {
    if(ihand[j] == "A")
    {
          if(itotal <= 9){
            itotal+=11;
          }
          else{
            itotal+=1;
          }
    }
  }
  return itotal;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
