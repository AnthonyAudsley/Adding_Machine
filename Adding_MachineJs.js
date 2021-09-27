var sum = 0;
var count= 0;
function add(x)
{
  sum = sum + x;
  count= count + 1;
  print();
}

function print()
{
 document.getElementById("output").innerHTML = "<hr> <br> The Sum is " + sum + "<br> The Count is: " + count;
}

function clearIt()
{
sum = 0;
count= 0;
  document.getElementById("output").innerHTML= " ";

}
