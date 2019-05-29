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
