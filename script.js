var a = document.querySelector("h5")
 var b = document.querySelector("#button2")
  var c = document.querySelector("#button1")
 b.addEventListener("click",function(){
    a.innerHTML = "Friend"
    a.style.color = "green"
 })
 c.addEventListener("click",function(){
    a.innerHTML = "Stranger"
    a.style.color = "red"
 })
 