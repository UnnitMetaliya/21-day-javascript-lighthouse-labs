// Challenge #1: Turning on the power.

function powerOn() {
  ship.powerOn = true;
}

// Challenge #2: Counting modules.

function countModules() {
  return availableModules.length;
}

// Challenge #3: Counting essential modules.

function countEssential() {
  let essentialModulesCount = 0;
  for (var i = 0; i < availableModules.length; i++) {
    if (availableModules[i].essential === true) {
      essentialModulesCount++;
    }
  }
  return essentialModulesCount;
}

// Challenge #4: Loading, enabling and looping modules.

function loadModule(index) {
  if (availableModules[index].essential === true) {
    availableModules[index].enabled = true;
    ship.modules.push(availableModules[index]);
  } else {
    return null;
  }
}

function loopModule() {
  for (var i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === "life-support") {
      loadModule(i);
    }
  }
}

loopModule();

// Challenge #5: Modularizing code and loading propulsion module.
// Note: If you are scratching your heads for hours like I did for challenge #5, then try loading "life-support" module first and "propulsion" module second.
// You need to have life-support first and propulsion second. This was damn frustrating given I was doing everything correct.

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findModuleIndex(moduleName) {
  for (var i = 0; i < availableModules.length; i++) {
    if (
      availableModules[i].name == moduleName &&
      availableModules[i].essential
    ) {
      return i;
    }
  }
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));

// Challenge 6: Loading navigation module.

loadModule(findModuleIndex("navigation"));

// Challenge #7: Resetting Larry.

function resetLARRY() {
  for (var i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

resetLARRY();

// Challenge #8: Updating loadModule function and adding communication module.

// Before..
/**
function loadModule(index){
    availableModules[index].enabled = true;
    ship.modules.push(availableModules[index]);
  }

**/

// After..
function loadModule(index) {
  if (availableModules[index].hasOwnProperty("essential")) {
    availableModules[index].essential = true;
  }
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

//
// ..findModuleIndex code
// .. loading previous three modules code
// .. resetLARRY code
// And, then....

loadModule(findModuleIndex("navigation"));

// Challenge #9: Setting the message

function setMessage() {
  var currentNavigationState = JSON.stringify(navigation);
  radio.message = currentNavigationState;
}

setMessage();

// Challenge #10: Activating Beacon.
// Trying new syntax for function declaration. Somehow this version is fast and looks more cool these days. See no "function" keyword.

var activateBeacon = () => {
  radio.beacon = true;
};

// Challenge #11 - Setting the radio frequency

var setFrequency = () => {
  let tuningFrequency = (radio.range.low + radio.range.high) / 2;
  radio.frequency = tuningFrequency;
};

// Challenge #12: Initiazing Navigation coordinates.

var initialize = () => {
  navigation.x = navigation.y = navigation.z = 0;
};

// Challenge #13: Calibarating X.

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

// Challenge #15 - Calibrating all at once.

var calibrate = () => {
  calibrateX();
  calibrateY();
  calibrateZ();
};

// Challenge #16 - Setting positive integer speed.

var setSpeed = speed => {
  var integerSpeed = parseInt(speed, 10);
  if (integerSpeed >= 0) {
    navigation.speed = integerSpeed;
  }
};

// Challenge #17 - Activating Antenna.

var activateAntenna = () => {
  ship.antenna.active = true;
};

activateAntenna();

// Challenge #18 - Sending broadcast back to earth.

var sendBroadcast = () => {
  for (var i = 1; i <= 100; i++) {
    broadcast();
  }
};

sendBroadcast();

// Challenge #19 - Configuring Broadcast. Removing previous function calls

var configureBroadcast = () => {
  setFrequency();
  activateAntenna();
  sendBroadcast();
};

configureBroadcast();

// Challenge #20 - Decoding message.

function decodeMessage(message) {
  var splittedMessage = message.split("");
  for (var i = 0; i < splittedMessage.length; i++) {
    splittedMessage[i] = splittedMessage[i]
      .replace("1", "i")
      .replace("3", "e")
      .replace("0", "o")
      .replace("4", "a")
      .replace("5", "y")
      .replace("2", "u")
      .replace("1", "l");
  }
  message = splittedMessage.join("");
  return message;
}

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
