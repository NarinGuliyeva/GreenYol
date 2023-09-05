$(window).scroll( function() {
    $("header").toggleClass("scrolled" , $(this).scrollTop()>50)
    if(  $(this).scrollTop()>50  ) {
      $("header").addClass("anime")
    }
    else {
      $("header").removeClass("anime")
    }
  } )

  $(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".hamburger-menu span:first-child").toggleClass("hamburger-line-active")
        $(".hamburger-menu span:last-child").toggleClass("hamburger-line-de-active")
        $(".ham-menu").toggleClass("ham-menu-active")   
    })
})

let demo1 = document.getElementById("demo1")
let demo2 = document.getElementById("demo2")

setInterval(function () {
    demo1.innerHTML = "1500"
    demo1.classList.add("animate__fadeIn")
    demo2.innerHTML = "təcrübəçi"
    demo2.classList.add("animate__fadeIn")
    setTimeout(() => {
        demo1.classList.remove("animate__fadeIn")
        demo2.classList.remove("animate__fadeIn")
    }, 1000
    )
}, 2000)

setInterval(function () {
    demo1.innerHTML = "14"
    demo1.classList.add("animate__fadeIn")
    demo2.innerHTML = "illik təcrübə"
    demo2.classList.add("animate__fadeIn")
}, 4000)

const clip = document.querySelectorAll(".clip") 
for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("mouseover", function () {
        this.firstElementChild.play()
  
    })
    clip[i].addEventListener("mouseout", function () {
        this.firstElementChild.pause()
    })
}