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

    const tl_load = gsap
        .timeline({ paused: false })
        .from(".page_main",
            { y: 32, opacity: 0, duration: 0.5, delay: 0.2, ease: "power3.ut"})
        .from(".nav_wrap",
            { scale: 0.9, opacity: 0, duration: 0.7, ease: "power3.out" }, "<");

    const tl_nav = gsap
        .timeline({ paused: true })
        .fromTo(nav_layout,
            { height: "64px" },
            { height: "auto", duration: 0.5, ease: "power3.inOut"})
        .fromTo(nav_open_icon,
            { rotation: 0 },
            { rotation: -45, duration: 0.5, ease: "power3.inOut"}, "<");

    tl_load.play();
    console.log("here");

    nav_open_wrap.addEventListener("click", () => {
        if (!nav_open) {
            tl_nav.play();
            nav_open = true;
        } else {
            tl_nav.reverse();
            nav_open = false;
        }
    });

    window.addEventListener("resize", () => {
        tl_nav.invalidate();
    });
});