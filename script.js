
// document.addEventListener('mousemove', (e) => {
//     const cursor = document.getElementById('cursor');
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });


var tl = gsap.timeline()


tl.from(".nav1", {
    y: -200,
    duration: 0.8,
    delay: 0.5,
    stagger: 1,
    opacity: 0
})
tl.from(".nav2 p ", {
    y: -200,
    duration: 0.8,
    delay: 0.5,
    stagger: 1,
    opacity: 0
})
// gsap.to("#page2 h1", {
//     transform: "translateX(-20%)",
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start: "top 0",
//         end: "top -100%",
//         scrub: 2,
//         pin: true

//     }

// })
tl.from(".right_center h2", {
    x: 200,
    duration: 0.8,
    delay: 0.5,
    stagger: 1,
    opacity: 0
})

tl.from(".right_center h1", {
    x: 200,
    duration: 0.8,
    delay: 0.5,
    stagger: 1,
    opacity: 0
})





var main = document.querySelector("#page1")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"

})

var main = document.querySelector("#page2")
var crsr = document.querySelector(".curso")

main.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"

})