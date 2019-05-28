// Challenge #9: Setting the message

function setMessage() {
  var currentNavigationState = JSON.stringify(navigation);
  radio.message = currentNavigationState;
}

setMessage();
