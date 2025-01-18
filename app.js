"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    //console.log("log");
});

let nav_open = false;

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    const nav_open_icon = document.querySelector(".nav_open_icon");
    const nav_logo_wrap = document.querySelector(".nav_logo_wrap");
    const nav_wrap = document.querySelector(".nav_wrap");
	const duration_animation_home = 0.7;
  	const duration_overlap_home = 0.5;
      console.log("hello");
  
  	// Home page load animation
  	if ( window.location.pathname === "/" || window.location.href.includes("webflow.io")) {
          const tl_load = gsap
          .timeline({ paused: false })
          .from(".nav_wrap",
              { scale: 0.9, opacity: 0, duration: 0.7, ease: "power3.out" })
          .from(".hero_primary_heading",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`)
          .from(".hero_primary_visual",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`)
          .from(".services_preview_wrap",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`)
          .from(".projects_preview_wrap",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`)
          .from(".cta_wrap",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`)
          .from(".footer_wrap",
              { y: 32, opacity: 0, duration: duration_animation_home, ease: "power3.out" }, `-=${duration_overlap_home}`);
    } else { // Default page load animation
        console.log("default");
    	const tl_load = gsap
        .timeline({ paused: false })
        .from(".page_main",
            { y: 32, opacity: 0, duration: 0.3, delay: 0.3, ease: "power3.out"})
        .from(".nav_wrap",
            { scale: 0.9, opacity: 0, duration: 0.3, ease: "power3.out" }, "<");
        tl_load.play();
    	console.log("here");
    	
        
        
        
        
    }

    const tl_nav = gsap
        .timeline({ paused: true })
        .fromTo(nav_wrap,
            { height: "64px" },
            { height: "auto", duration: 0.3, ease: "power3.inOut"})
        .fromTo(nav_open_icon,
            { rotation: 0 },
            { rotation: -45, duration: 0.3, ease: "power3.inOut"}, "<");

    nav_wrap.addEventListener("click", (event) => {
        if (!nav_open) {
            tl_nav.play();
            nav_open = true;
        } else {
            tl_nav.reverse();
            nav_open = false;
        }
    });

    nav_logo_wrap.addEventListener("click", (event) => {
        event.stopPropagation();
    })

    window.addEventListener("resize", () => {
        tl_nav.invalidate();
    });
});