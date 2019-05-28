// Challenge #12: Setting the frequency using formula.

var setFrequency = () => {
  let tuningFrequency = (radio.range.low + radio.range.high) / 2;
  radio.frequency = tuningFrequency;
};
