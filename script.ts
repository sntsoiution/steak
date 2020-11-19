
const card:HTMLElement=document.querySelector('.card');
const container:HTMLElement=document.querySelector('.container');

const title:HTMLElement =document.querySelector(".title");
const sneaker:HTMLElement =document.querySelector(".sneaker img");
const purchase:HTMLElement =document.querySelector(".purchase button");
const description:HTMLElement =document.querySelector(".info h3 ");
const sizes:HTMLElement =document.querySelector(".sizes");

addEventListener('resize',function(){
  document.body.style.transform = `scale(${innerWidth/1920})`;
})

const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e);

container.addEventListener("mousemove",(e)=>{
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});


container.addEventListener("mouseenter", (e) => {
  card.style.transition="none";
  title.style.transform ="translateZ(150px)";
  sneaker.style.transform ="translateZ(200px) rotateZ(-45deg)";
  description.style.transform ="translateZ(125px)";
  sizes.style.transform ="translateZ(100px)";
  purchase.style.transform ="translateZ(75px)";
});


container.addEventListener("mouseleave", (e) => {
  card.style.transition ="all 0.5s ease";
  card.style.transform=`rotate(0deg) rotate(0deg)`;

  title.style.transform ="translateZ(0px)";
  sneaker.style.transform ="translateZ(0px) rotateZ(0deg)";
  description.style.transform ="translateZ(0px)";
  sizes.style.transform ="translateZ(0px)";
  purchase.style.transform ="translateZ(0px)";
});