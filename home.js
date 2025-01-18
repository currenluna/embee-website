"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    console.log("working");
});

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    
    const h1 = document.querySelector(".hero_primary_heading");

    const tl_text = gsap
        .timeline({ paused: false })
        .from(h1,
            { y: 32, opacity: 0, duration: 0.3, delay: 0.3, ease: "power3.ut"})
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