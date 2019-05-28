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
