things to do

crop pins and ball out of lane
get pics of pins on their own.
put them together in the right formation using z avit
when ball is released, it triggeres zoom in graphic css change.
then when ball hits z axis of pins, check the difference between the xcordinates of the pin and the ball, and
- if the ball overlaps any x coordinates make pin move
-direction of pin moving is 90 degree rotation and slightly down
-the direction is detrmined by which side of the ball more width of the pin is. then it will fall in that direction.


still need to determin how to get ball to knock over more pins on better shot

//<img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" class="animated rotateOutDownLeft infinite" alt="Transparent MDB Logo" id="animated-img1">

//<img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" class="animated zoomIninfinite" alt="Transparent MDB Logo" id="animated-img1">

//<img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" class="animated slideInUp fast" alt="Transparent MDB Logo" id="animated-img1">


@keyframes slide {
  0%, 100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(50px, 0);
  }

  80% {
    transform: translate(-50px, 0);
  }
}

.cat{
  animation: slide 2s linear infinite alternate;
}

@keyframes rotate {
  0%, 50% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-20deg);
  }
  75% {
    transform: rotate(20deg);
  }
}