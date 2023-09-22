let crsr = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
})


gsap.to("nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.3,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3
    }
})

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 3
    }
})