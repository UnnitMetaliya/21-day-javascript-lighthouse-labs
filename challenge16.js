// Challenge #16 - Setting positive integer speed.

var setSpeed = speed => {
  var integerSpeed = parseInt(speed, 10);
  if (integerSpeed >= 0) {
    navigation.speed = integerSpeed;
  }
};
