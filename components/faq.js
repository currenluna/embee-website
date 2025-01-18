"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    console.log("log");
});

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", () => {
    
    const accordions = gsap.utils.toArray(".accordion_group");

    accordions.forEach(accordion => {
        const accordion_question = accordion.querySelector(".accordion_question_wrap");
        const accordion_answer = accordion.querySelector(".accordion_answer_wrap");
        const accordion_icon = accordion.querySelector(".accordion_question_icon");

        const tl_accordion = gsap
        .timeline({ paused: true, reversed: true })
        .fromTo(accordion_answer,
            { height: "0px" },
            { height: "auto", duration: 0.3, ease: "power3.inOut"})
        .fromTo(accordion_icon,
            { rotation: 0 },
            { rotation: -180, duration: 0.3, ease: "power3.inOut"}, "<");

        accordion_question.addEventListener("click", () => {
            tl_accordion.reversed() ? tl_accordion.play() : tl_accordion.reverse();
        });
    
        window.addEventListener("resize", () => {
            tl_accordion.invalidate();
        });

    });
});