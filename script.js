
// importing an gasp form site
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";ezx


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


let videocon = document.querySelector("#video-cantainer");
let playbtn = document.querySelector("#play");

function videoconAnimation(){
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn,{
            opacity:1,
            scale:1,
        })
    });
    
    videocon.addEventListener('mouseleave',function(){
        gsap.to(playbtn,{
            opacity:0,
            scale:0,
        })
    })
    
    videocon.addEventListener('mousemove',function(dets){
        gsap.to(playbtn,{
            top: dets.y-50,
            left: dets.x-50,
        })
    })
}
videoconAnimation()

function loadingAnimation(){
    let mainHeadline = document.querySelector('#page1 h1')

gasp.from(mainHeadline,{
    y: 100,
    opacity: 0,
    delay:0.5,
    duration:0.9,
    stagger: 0.3,
})

gasp.from(videocon,{
    sclae: 0.9,
    opacity: 0,
    delay:1.3,
    duration:0.5,

})
}
loadingAnimation()

