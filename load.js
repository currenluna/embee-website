"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    //console.log("log");
});

let nav_open = false;

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    const page = document.querySelector(".page_wrap");
    const tl = gsap
        .timeline({ paused: false })
        .from(page, { y: "64px", opacity: 0 });

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