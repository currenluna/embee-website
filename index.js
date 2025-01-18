"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
    //console.log("log");
});

gsap.registerPlugin(ScrollTrigger);

let nav_open = false;

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    const nav_open_icon = document.querySelector(".nav_open_icon");
    const nav_logo_wrap = document.querySelector(".nav_logo_wrap");
    const nav_wrap = document.querySelector(".nav_wrap");
	const duration_animation_home = 0.7;
  	const duration_overlap_home = 0.5;
    console.log("hello");
   
    // Global footer rotation animation
    gsap.to(".footer_symbol", {
        rotation: 135, // Rotate from 0 to 135 degrees
        ease: "none", // Linear rotation based on scroll
        scrollTrigger: {
          trigger: ".footer_symbol", // The element triggering the animation
          start: "top bottom", // Start when the element's top reaches the bottom of the viewport
          end: "top 70%", // End when the element's top reaches 90% of the viewport
          scrub: true, // Sync animation progress with scroll
          markers: true // Optional: Add markers for debugging
        }
    });

  	// Home page load animation
  	if ( window.location.pathname === "/") {
        

        // Create main timeline without ScrollTrigger
        const tl_load = gsap.timeline({ paused: false });

        // Add animations to the timeline
        tl_load
        .from(".nav_wrap", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: .3
        }, `-=${duration_overlap_home}`)
        .from(".hero_primary_heading", {
            y: 32,
            opacity: 0,
            duration: duration_animation_home,
            ease: "power3.out"
        }, `-=${duration_overlap_home}`)
        .from(".hero_primary_visual", {
            scale: 0.95,
            y: 16,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, `-=${duration_overlap_home}`);

        // Add ScrollTrigger animations outside the timeline
        gsap.from(".services_preview_wrap", {
        scrollTrigger: {
            trigger: ".services_preview_wrap",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 16,
        opacity: 0,
        duration: duration_animation_home,
        ease: "power3.out"
        });

        gsap.from(".projects_preview_wrap", {
        scrollTrigger: {
            trigger: ".projects_preview_wrap",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 16,
        opacity: 0,
        duration: duration_animation_home,
        ease: "power3.out"
        });

        gsap.from(".cta_wrap", {
        scrollTrigger: {
            trigger: ".cta_wrap",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 16,
        opacity: 0,
        duration: duration_animation_home,
        ease: "power3.out"
        });

        gsap.from(".footer_wrap", {
        scrollTrigger: {
            trigger: ".footer_wrap",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 16,
        opacity: 0,
        duration: duration_animation_home,
        ease: "power3.out"
        });


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
