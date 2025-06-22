var a = document.querySelector("h2")
 var b = document.querySelector("#button2")
  var c = document.querySelector("#button1")
 b.addEventListener("click",function(){
    a.innerHTML = "Angle Priya"
    a.style.color = "green"
 })
 c.addEventListener("click",function(){
    a.innerHTML = "Angle Priya"
    a.style.color = "red"
 })