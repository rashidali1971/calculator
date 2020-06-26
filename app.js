//function for displaying values
// function dis(val)
// {
// document.getElementById("edu").value+=val
// &nbsp;}
//function for evaluation
var num1;
function solve()
{
var x = document.getElementById("det").value
// var y = num1 + x;
var y = eval(x)
document.getElementById("edu").value = y
document.getElementById("det").value = x+'='+y;
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = "";
document.getElementById("det").value = "";
}

function show_data(data)
{
document.getElementById("edu").value += data;
document.getElementById("det").value += data;
}
function first_num(data)
{
  num1 = document.getElementById("edu").value += data;
  document.getElementById("edu").value = ""
  document.getElementById("det").value += data;
}
