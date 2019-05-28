// Challenge #11 - Setting the radio frequency.

var setFrequency = () => {
  let tuningFrequency = (radio.range.low + radio.range.high) / 2;
  radio.frequency = tuningFrequency;
};
