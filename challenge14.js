// Challenge #14 - Calibrating Y & Z.

var calibrateY = () => {
  for (var i = 1; i <= 60; i++) {
    var signal = checkSignal();
    if (signal) {
      navigation.y = signal;
      break;
    }
  }
};

var calibrateZ = () => {
  for (var i = 1; i <= 60; i++) {
    var signal = checkSignal();
    if (signal) {
      navigation.z = signal;
      break;
    }
  }
};

calibrateY();
calibrateZ();
