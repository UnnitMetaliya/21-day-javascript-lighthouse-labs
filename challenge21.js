// Challenge #21 - Returning back to Earth.

var returnToEarth = () => {
  var xResponse = broadcast("x");
  var yResponse = broadcast("y");
  var zResponse = broadcast("z");

  var xCoOrdinates = parseInt(decodeMessage(xResponse), 16);
  var yCoOrdinates = parseInt(decodeMessage(yResponse), 16);
  var zCoOrdinates = parseInt(decodeMessage(zResponse), 16);

  navigation.x = xCoOrdinates;
  navigation.y = yCoOrdinates;
  navigation.z = zCoOrdinates;
};

returnToEarth();
