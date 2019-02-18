function encrypt(){
  var f = document.getElementById("shift").value;
  var x = document.getElementById("ceaser-input").value;
  var shift1 = Number(f)
  console.log(shift1);
  var result='';
  for (var i = 0, len = x.length; i < len; i++) {
    if (x[i] == x[i].toUpperCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 65 + shift1) % 26) + 97);
      result = result + String.fromCharCode(e).toUpperCase();
    }
    else if (x[i] == x[i].toLowerCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 97 + shift1) % 26) + 97);
      result = result + String.fromCharCode(e);
    }
    else {
      result = result + x[i];
    }
  }
  document.getElementById('result').value = result ;
}