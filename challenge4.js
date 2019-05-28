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
