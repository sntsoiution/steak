var card = document.querySelector('.card');
var container = document.querySelector('.container');
var title = document.querySelector(".title");
var sneaker = document.querySelector(".sneaker img");
var purchase = document.querySelector(".purchase button");
var description = document.querySelector(".info h3 ");
var sizes = document.querySelector(".sizes");
addEventListener('resize', function () {
    document.body.style.transform = "scale(" + innerWidth / 1920 + ")";
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
container.addEventListener("mousemove", function (e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
});
container.addEventListener("mouseenter", function (e) {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});
container.addEventListener("mouseleave", function (e) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotate(0deg) rotate(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
