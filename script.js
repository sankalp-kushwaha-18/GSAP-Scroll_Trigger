function page1Animation(){
  var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button", {
  y:-40,
  opacity:0,
  delay:0.5,
  duration:0.5,
  stagger:0.15,
})

tl.from(".center-part-1 h1", {
  x:-200,
  opacity:0,
  duration:0.5
},"-=0.3")
tl.from(".center-part-2 img", {
  x:+100,
  opacity:0,
  duration:0.8,
},"-=0.2")
tl.from(".center-part-1 p", {
  x:-100,
  opacity:0,
  duration:0.4
},"-=0.5")
tl.from(".center-part-1 button", {
  opacity:0,
  duration:0.4
})

tl.from(".section1bottom img", {
  y:30,
  opacity:0,
  // delay:0.5,
  duration:0.4,
  stagger:0.15,
})
}
page1Animation();

var st = gsap.timeline({
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    scrub:2,
    end:"top 0"
  }
})
st.from(".services", {
  x:-300,
  opacity:0,
  duration:0.5,
})
st.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:1,
})
st.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration:1,
},"-=0.8")
st.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration:1,
})
st.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration:1,
},"-=0.8")


// st.from(".elem.line1.left",{
//   x:-300,
//   opacity:0,
//   duration:1,
// },"anim")
// st.from(".elem.line1.right",{
//   x:300,
//   opacity:0,
//   duration:1,
// },"anim")

//this is to make them run both together. add the same random name to both of them