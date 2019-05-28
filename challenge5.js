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
