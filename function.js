function btnclk(){
  var num1 = parseInt(document.getElementById("calucbox1").value);
  var num2 = parseInt(document.getElementById("calucbox2").value);

  var Ans = num1 + num2;

  document.getElementById( "ans" ).value = Ans;
}
