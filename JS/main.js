let spanChange = document.querySelector(".choose span")
let fsLis = document.querySelectorAll(".choose .fs li")
let fcLis = document.querySelectorAll(".choose .fc li")
let fwLis = document.querySelectorAll(".choose .fw li")

fsLis.forEach(li => {
   li.addEventListener("click", function () {
      fsLis.forEach(li=>{
         li.classList.remove("active")
      })
      li.classList.add("active")
      spanChange.style.fontSize = li.getAttribute("data-size") ;
   })
})

fcLis.forEach(li => {
   li.addEventListener("click", function () {
      fcLis.forEach(li=>{
         li.classList.remove("active")
      })
      li.classList.add("active")
      spanChange.style.color = li.getAttribute("data-color") ;
   })
})

fwLis.forEach(li => {
   li.addEventListener("click", function () {
      fwLis.forEach(li=>{
         li.classList.remove("active")
      })
      li.classList.add("active")
      spanChange.style.fontWeight = li.getAttribute("data-weight") ;
   })
})
