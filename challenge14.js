// Challenge #14: Calibarating X.

var calibrateX = () => {
  for (var i = 1; i <= 12; i++) {
    var signal = checkSignal();
    if (signal) {
      navigation.x = signal;
      break;
    }
  }
};

calibrateX();
