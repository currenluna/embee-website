"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    //console.log("log");
});

let nav_open = false;

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    const nav_open_wrap = document.querySelector(".nav_open_wrap");
    const nav_open_icon = document.querySelector(".nav_open_icon");
    const nav_layout = document.querySelector(".nav_layout");
    const tl = gsap
        .timeline({ paused: true })
        .fromTo(nav_layout,
            { height: "64px" },
            { height: "auto", duration: 0.5, ease: "power3.inOut"})
        .fromTo(nav_open_icon,
            { rotation: 0 },
            { rotation: -45, duration: 0.5, ease: "power3.inOut"}, "<");

    nav_open_wrap.addEventListener("click", () => {
        if (!nav_open) {
            tl.play();
            nav_open = true;
        } else {
            tl.reverse();
            nav_open = false;
        }
    });

    window.addEventListener("resize", () => {
        tl.invalidate();
    });
});