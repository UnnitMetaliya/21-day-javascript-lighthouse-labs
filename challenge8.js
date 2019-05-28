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
