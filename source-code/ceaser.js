function encrypt()
{
  var plain_text = document . getElementById ("message").value;
  var shift = document.getElementById("cshift").value;
  var cypher_text = [];
  var alphabet =[ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  for (idx =0; idx < plain_text.length ; idx ++)
  {
    input = alphabet.indexOf (plain_text [idx ]);
    if( input == -1 )
     {
      cypher_text.push (plain_text [ idx ]);
     }
     else
    {
    var coded = (input + shift) %26;
    var letter = alphabet [coded];
    cypher_text.push(letter);
    }
  }
  document.getElementById ("eoutput").innerHTML = cypher_text.join ("");
}





function decrypt()
{
  var plain_text = document . getElementById ("message").value;
  var shift = document.getElementById("cshift").value;
  var cypher_text = [];
  var alphabet =[ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  for (idx =0; idx < plain_text.length ; idx ++)
  {
    input = alphabet.indexOf (plain_text [idx ]);
    if( input == -1 )
     {
      cypher_text.push (plain_text [ idx ]);
     }
     else
    {
    shift=(26-shift)
    var coded = (input + shift) %26;
    var letter = alphabet [coded];
    cypher_text.push(letter);
    }
  }
  document.getElementById ("doutput").innerHTML = cypher_text.join ("");
}