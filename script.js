// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();





$(document).ready(function(){
    $('#icon').click(function(){
      $('menu').toggleClass('show');
    });
  });

  $(document).ready(function(){
    $('#close').click(function(){
      $('menu').toggleClass('show');
    });
  });





function homePageAnimation(){
    gsap.from(" .hero p, .hero button",{
        y: 50,
        duration: .8,
        delay: .1,
        opacity: 0,
        stagger: .15,
    },"a")

    gsap.from(".hero .box h1",{
        rotate: 5,
        y: "130%",
        duration: .8,
        opacity: 0,
        delay: .1,
    },"a")
}
homePageAnimation()




let width = window.innerWidth;

if(width>501){
        
    function sheryJsAnimation(){
            Shery.mouseFollower({
                skew: true,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
              
              
              Shery.makeMagnet(".layer .box, .logo, menu a, button, .page6 img, .page2 a, .page6 h1, .page9 a" /* Element to target.*/, {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });

              Shery.imageMasker(".page5 img", {
                mouseFollower: true,
                text: "Projects",
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
              
              
              Shery.imageMasker(".page8 h1", {
                mouseFollower: true,
                text: "Get In Touch",
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
    }
    sheryJsAnimation()
    
    function navAnimation(){
    gsap.from(".logo, menu",{
        x: 50,
        duration: .8,
        delay: .2,
        opacity: 0,
        stagger: .3,
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top 2%",
            end: "bottom top",
        }
    })
    }
    navAnimation()

    function page2Animation(){
        gsap.from(".page2 .menu",{
            y: 110,
            opacity: 0,
            duration: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: ".page2 .menu",
                scroller: "body",
                start: "top 110%",
                end: "bottom top",
            }
        })
    }
    page2Animation()

    function page3Animation(){
            gsap.from(".page3 .left, .page3 .right",{
                y: 100,
                opacity: 0,
                duration: .8,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .left",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                }
            })
    }
    page3Animation()

    function page4Animation(){
            gsap.from(".page4 .up h1",{
                y: 200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 93%",
                    end: "bottom bottom",
                }
            })
            
            gsap.from(".page4 .down .box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                }
            })
    }
    page4Animation()


}


if (width < 501) {

    function page2AnimationResponsive(){
        gsap.from(".page2 .menu",{
            y: 110,
            opacity: 0,
            duration: 1,
            delay: .2,
            stagger: .2,
            scrollTrigger: {
                trigger: ".page2 .menu",
                scroller: "body",
                start: "top 110%",
                end: "bottom top",
            }
        })
    }
    page2AnimationResponsive()

    function page3AnimationResponsive(){
            gsap.from(".page3 .left",{
                y: 100,
                opacity: 0,
                duration: .8,
                delay: .2,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .left",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    
            gsap.from(".page3 .right",{
                y: 100,
                opacity: 0,
                duration: .8,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .right",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    }
    page3AnimationResponsive()

    function page4AnimationResponsive(){
            gsap.from(".page4 .up h1",{
                y: 200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 93%",
                    end: "bottom bottom",
                }
            })
            
            gsap.from(".page4 .down #first-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #first-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    
            gsap.from(".page4 .down #second-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #second-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                    // markers: true
    
                }
            })
    
            gsap.from(".page4 .down #third-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #third-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                }
            })
    }
    page4AnimationResponsive()


}
 

function exploreButton(){
    gsap.from(".Explore button",{
        y: 100,
        opacity: 0,
        duration: .6,
        stagger: .2,
        scrollTrigger: {
            trigger: ".Explore button",
            scroller: "body",
            start: "top 105%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
exploreButton()


function page5Animation(){
    gsap.from(".page5 .up img",{
        // x: -150,
        scale: .8,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page5 .up",
            scroller: "body",
            start: "top 75%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page5 .down img",{
        // x: 150,
        scale: .8,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page5 .down",
            scroller: "body",
            start: "top 75%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page5Animation()


function page6Animation(){
    gsap.from(".page6 .top h1,.page6 .top p",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 110%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page6 .bottom .left h1,.page6 .bottom .left p",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 80%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page6 .bottom img",{
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page6Animation()


function page7Animation(){
    gsap.from(".page7>h1, .page7>p, .page7 .box",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page7>h1, .page7>p, .page7 .box",
            scroller: "body",
            start: "top 85%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page7Animation()


function page8Animation(){
    gsap.from(".page8>a",{
        scale: .5,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page8",
            scroller: "body",
            start: "50% 95%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page8Animation()


function page9Animation(){
    gsap.from(".page9 .box",{
        x: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page9 .box",
            scroller: "body",
            start: "top 90%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page9Animation()




const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    })
})



document.querySelectorAll('a[href^="#page3, #page4, #page5"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





