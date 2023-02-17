var number = document.getElementById("number").innerHTML;
var increase = document.getElementsByClassName("lt-button")[0];
var decrease = document.getElementsByClassName("rt-button")[0];
var reset = document.getElementsByClassName("reset")[0];

increase.addEventListener("click", () => {
  number++;
  document.getElementById("number").innerHTML = number;
});

decrease.addEventListener("click", () => {
  if(number > 0){
    number--;
    document.getElementById("number").innerHTML = number;
  }
});

reset.addEventListener("click",() => {
  number = 0;
  document.getElementById("number").innerHTML = number;
})


