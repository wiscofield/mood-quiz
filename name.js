
function passvalues(){
  let firstpage = document.querySelector("input").value;
  localStorage.setItem("textvalue",firstpage);
  return false;
}

console.log("apple");

//var cat = localStorage.getItem('myCat');
document.querySelector("#result").innerHTML = localStorage.getItem("textvalue")
