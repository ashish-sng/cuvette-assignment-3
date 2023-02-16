var number = document.getElementById("number").innerHTML;
var increase = document.getElementsByClassName("lt-button")[0];
var decrease = document.getElementsByClassName("rt-button")[0];

increase.addEventListener("click", () => {
  number++;
  document.getElementById("number").innerHTML = number;
});

decrease.addEventListener("click", () => {
  number--;
  document.getElementById("number").innerHTML = number;
});
