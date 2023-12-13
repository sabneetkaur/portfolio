

gsap.to(".loader",{
    y:-1800,
    duration:4,
    delay:3,

   })

   gsap.from("#one",{
    marginBottom:400,
    height:0,
    duration:3,
    delay:4.25,
    repeat:1
    // scrollTrigger:{
    //     trigger:"#one",
    //     scroller:".container",
    //     // markers:true,
    //     // start:"top 60%",
    //     // end:"top 30%",
    //     scrub:2,

    // }
   })

   gsap.from(".text h1",{
    // x:-710,
    // marginTop:400,
    // height:0.4,
    x:-510,
    duration:3,
    delay:4.25,
    stagger:2,
    opacity:0
   })

   gsap.from("#two",{
    // x:-710,
    // marginTop:400,
    // height:0.4,
    y:700,
    duration:2,
    delay:4.25,
    repeat:1
   })
   gsap.from("#three",{
    marginBottom:400,
    height:0,
    duration:3,
    delay:4.25,
    repeat:1
    // scrollTrigger:{
    //     trigger:"#three",
    //     scroller:"body",
    //     // markers:true,
    //     start:"top top",
    //     // end:"top 30%",
    //     scrub:2,

    // }
   })

//    gsap.registerPlugin(ScrollTrigger);

    const tl=gsap.timeline();
    

    tl.to(".vdda",{
        x:-window.innerWidth,

    })
    ScrollTrigger.create({
        animation:tl,
        trigger:".vdda",
        start:"top top",
        end:"+1800",
        scrub:2,
        pin:true
    })
    
    // gsap.registerPlugin(ScrollTrigger);

    // const tt=gsap.timeline();
    

    // tl.to(".page3",{
    //     x:-window.innerWidth,

    // })
    // ScrollTrigger.create({
    //     animation:tt,
    //     trigger:".page3",
    //     start:"top top",
    //     scrub:true,
    //     pin:true
    // })


    const initSlider = () => {
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelector(".containers .slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        
        // Handle scrollbar thumb drag
        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            
            // Update thumb position on mouse move
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                // Ensure the scrollbar thumb stays within bounds
                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                
                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }
            // Remove event listeners on mouse up
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }
            // Add event listeners for drag interaction
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });
        // Slide images according to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
         // Show or hide slide buttons based on scroll position
        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        }
        // Update scrollbar thumb position based on image scroll
        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }
        // Call these two functions when image list scrolls
        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });
      }
      window.addEventListener("resize", initSlider);
      window.addEventListener("load", initSlider);
      
      







//       var duration = 50 * 1000;
// var animationEnd = Date.now() + duration;
// var skew = 1;

// function randomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// (function frame() {
//   var timeLeft = animationEnd - Date.now();
//   var ticks = Math.max(200, 500 * (timeLeft / duration));
//   skew = Math.max(0.8, skew - 0.001);

//   confetti({
//     particleCount: 5,
//     startVelocity: 0,
//     ticks: ticks,
//     origin: {
//       x: Math.random(),
//       // since particles fall down, skew start toward the top
//       y: (Math.random() * skew) - 0.2
//     },
//     colors: ['#ffffff'],
//     shapes: ['circle'],
//     gravity: randomInRange(0.4, 0.6),
//     scalar: randomInRange(0.4, 1),
//     drift: randomInRange(-0.4, 0.4)
//   });

//   if (timeLeft > 0) {
//     requestAnimationFrame(frame);
//   }
// }());


