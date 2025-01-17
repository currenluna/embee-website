"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    console.log("working");
});

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    
    const h1 = document.querySelector(".hero_primary_heading");

    const tl_load = gsap
        .timeline({ paused: false })
        .from(".page_main",
            { y: 32, opacity: 0, duration: 0.3, delay: 0.3, ease: "power3.ut"})
        .from(".nav_wrap",
            { scale: 0.9, opacity: 0, duration: 0.3, ease: "power3.out" }, "<");

    const tl_nav = gsap
        .timeline({ paused: true })
        .fromTo(nav_wrap,
            { height: "64px" },
            { height: "auto", duration: 0.3, ease: "power3.inOut"})
        .fromTo(nav_open_icon,
            { rotation: 0 },
            { rotation: -45, duration: 0.3, ease: "power3.inOut"}, "<");

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

// (function(global) {
//     global.pageFunctions = global.pageFunctions
//     || {
//         executed: {},
//         functions: {},
//         addFunction: function(id,fn) {
//             if (!this.functions[id]) this.functions[id]=fn;
//         }, executeFunctions: function() {
//             if (this.added) return;
//             this.added=true;
//             for (const id in this.functions) {
//                 if (!this.executed[id]) {
//                     try {
//                         this.functions[id]();
//                         this.executed[id]=true
//                     } catch(e) {
//                         console.error(`Error executing function ${id}:`,e)
//                     }
//                 }
//             }
//         }
//     }
// })(window);